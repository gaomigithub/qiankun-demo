
// an Chat plugin of AI
(function (window, undefined) {

    // define prompts for multiple languages
    const prompts = {
        zh: {
            'summarize': '用要点来总结下面这段文本：',
            'explain': '用要点来解释涉及的关键概念，然后用简单的话总结下面这段话：',
            'generate': '用中文来',
        }
    }

    let modelUrl = '';
    let ApiBase = '';
    let ApiKey = '';
    let model = '';
    let hasKey = true;
    let messageHistory = null; // a reference to the message history DOM element
    let conversationHistory = null; // a list of all the messages in the conversation
    let messageInput = null;
    let typingIndicator = null;
    let lang = '';
    let lastAnswer = '';
    let urlCbParams = null;

    function checkApiKey() {
        ApiKey = localStorage.getItem('apikey');
        ApiBase = localStorage.getItem('apibase');
        model = localStorage.getItem('model');
        if (ApiBase) {
            hasKey = true;
        } else {
            hasKey = false;
            displayMessage(generateText('Set Your LLM API Key first'), 'ai-message');
            console.log("Set Your LLM API Key first > translated", generateText('Set Your ZhiPu API Key first'))
        }
    };


    window.Asc.plugin.init = async function () {
        lang = window.Asc.plugin.info.lang.substring(0, 2);
        console.log("current lang: ", lang)
        console.log("test translate: " + prompts[lang]['summarize']);
        messageHistory = document.querySelector('.message-history');
        conversationHistory = [];
        typingIndicator = document.querySelector('.typing-indicator');
        model = localStorage.getItem('model');
        modelUrl = localStorage.getItem('url');
        if(!model||!modelUrl){
            const {result} = await fetch("/api/v1/office/modelconfig", {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                }
            }).then((response) => response.json())
            const { url : mUrl, value } = result.data[0];
            model = value;
            modelUrl = mUrl;
        }
        // checkApiKey();
        const info = window.Asc.plugin.info;
        if (info) {
            urlCbParams = getURLParameters(info.documentCallbackUrl);
        } else {
            window.Asc.plugin.executeCommand("close", "");
            console.log("获取插件相关信息失败");
            return;
        }
    };

    window.Asc.plugin.button = function () {
        this.executeCommand("close", "");
    };

    function getContextMenuItems() {
        let settings = {
            guid: window.Asc.plugin.guid,
            items: [
                {
                    id: 'Ask4insight Copilot',
                    text: generateText('Ask4Insight Copilot'),
                    items: [
                        {
                            id: 'insert_answer',
                            text: generateText('insert answer'),
                        },
                        {
                            id: 'generate',
                            text: generateText('generate'),
                        },
                        {
                            id: 'summarize',
                            text: generateText('summarize'),
                        },
                        {
                            id: 'explain',
                            text: generateText('explain'),
                        },
                        {
                            id: 'load_to_kb',
                            text: generateText('load to knowledgebase'),
                        },
                        {
                            id: 'clear_history',
                            text: generateText('clear chat history'),
                        }
                    ]
                }
            ]
        }
        return settings;
    }

    window.Asc.plugin.attachEvent('onContextMenuShow', function (options) {
        if (!options) return;

        if (options.type === 'Selection' || options.type === 'Target')
            this.executeMethod('AddContextMenuItem', [getContextMenuItems()]);
    });

    window.Asc.plugin.attachContextMenuClickEvent('clear_history', function () {
        clearHistory();
    });

    const displayMessage = function (message, messageType) {
        message = message.replace(/^"|"$/g, ''); // remove surrounding quotes
        message = message.replace(/\\n/g, '\n'); // replace \n with newline characters

        // create a new message element
        const messageElement = document.createElement('div');
        messageElement.classList.add(messageType); // Add a class for user messages

        // split the message into lines and create a text node for each line
        const lines = message.split('\n');
        for (const line of lines) {
            const textNode = document.createTextNode(line);
            messageElement.appendChild(textNode);
            messageElement.appendChild(document.createElement('br'));
        }

        // add the message element to the message history
        messageHistory.appendChild(messageElement);

        //  scroll to the bottom of the message history
        messageHistory.scrollTop = messageHistory.scrollHeight;

    };

    //insert answer
    window.Asc.plugin.attachContextMenuClickEvent('load_to_kb', function () {
        window.Asc.plugin.executeMethod('GetSelectedText', null, function (text) {
            loadToKnowledgeBase(text)
                .then(data => {
                    console.log("知识库导入成功");
                    displayMessage('知识库导入成功', 'ai-message');
                })
                .catch(error => {
                    console.log("知识库导入失败", error);
                    displayMessage('知识库导入失败', 'ai-message');
                });
        });
    });

    //insert answer
    window.Asc.plugin.attachContextMenuClickEvent('insert_answer', function () {
        window.Asc.plugin.executeMethod('GetSelectedText', null, function (text) {
            console.log("last Answer: ", lastAnswer)
            window.Asc.plugin.executeMethod("PasteText", [lastAnswer]);
        });
    });

    //summarize
    window.Asc.plugin.attachContextMenuClickEvent('summarize', function () {
        window.Asc.plugin.executeMethod('GetSelectedText', null, function (text) {
            // conversationHistory.push({ role: 'user', content: prompts[lang]['summarize'] + text });
            const content = prompts[lang]['summarize'] + text;
            typingIndicator.style.display = 'block'; // hide the typing indicator
            sseRequest(content).then(reader => {
                console.log("SSE请求成功");
                typingIndicator.style.display = 'none'; // hide the typing indicator
                let currentDiv = null;
                let currentMessage = null;
                displaySSEMessage(reader, currentDiv, currentMessage, "");
            })
                .catch(error => {
                    typingIndicator.style.display = 'none'; // hide the typing indicator
                    console.log("SSE请求失败", error);
                });
        });
    });

    // explain 
    window.Asc.plugin.attachContextMenuClickEvent('explain', function () {
        window.Asc.plugin.executeMethod('GetSelectedText', null, function (text) {
            // conversationHistory.push({ role: 'user', content: prompts[lang]['explain'] + text });
            const content = prompts[lang]['explain'] + text;
            typingIndicator.style.display = 'block'; // hide the typing indicator
            sseRequest(content)
                .then(reader => {
                    typingIndicator.style.display = 'none'; // hide the typing indicator
                    console.log("SSE请求成功");
                    let currentDiv = null;
                    let currentMessage = null;
                    displaySSEMessage(reader, currentDiv, currentMessage, "");
                })
                .catch(error => {
                    typingIndicator.style.display = 'none'; // hide the typing indicator
                    console.log("SSE请求失败", error);
                });
        });
    });

    // generate content in document using sse
    window.Asc.plugin.attachContextMenuClickEvent('generate', function () {
        window.Asc.plugin.executeMethod('GetSelectedText', null, function (text) {
            // let prompt = ({ role: 'user', content: prompts[lang]['generate'] + text });
            const content = prompts[lang]['generate'] + text;
            typingIndicator.style.display = 'block'; // display the typing indicator
            let currentMessage = '';
            let buffer = '';
            sseRequest(content)
                .then(reader => {
                    typingIndicator.style.display = 'none'; // hide the typing indicator
                    console.log("SSE请求成功");

                    reader.read().then(function processResult(result) {
                        // console.log("stream buffer: ", buffer.length);
                        if (result.done) {
                            console.log("stream done");
                            return;
                        }
                        if (currentMessage === null) {
                            currentMessage = '';
                        }
                        const _line = buffer + result.value;
                        const lines = _line.split('\n');
                        lines.forEach(line => {
                            // console.log(line);
                            if (line.includes('data') && line.endsWith("}")) {
                                const fragment = line.split(': ')[1];
                                const jsonFrag = JSON.parse(fragment);

                                const fragText = jsonFrag.result.message.text;
                                currentMessage += fragText;

                                window.Asc.plugin.executeMethod("PasteText", [currentMessage]);

                                currentMessage = '';
                            } else {
                                buffer = line;
                                // console.log(buffer);
                            }
                        });
                        lastAnswer = currentMessage;
                        console.log("大模型回复：", lastAnswer);

                        // recursively call processResult() to continue reading data from the stream
                        reader.read().then(processResult);
                    });
                })
                .catch(error => {
                    console.log("SSE请求失败", error);
                    typingIndicator.style.display = 'none'; // hide the typing indicator
                });
        });
    });

    // generate async request (for in-doc function)
    let generateResponse = function () {
        return new Promise(function (resolve, reject) {
            let prompt = {
                "prompt": conversationHistory
            }
            window.Asc.sendRequest(prompt)
                .then(function (res) {
                    console.log("获得回复：", res);
                    resolve(res);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }

    // Make sure the DOM is fully loaded before querying the DOM elements
    document.addEventListener("DOMContentLoaded", function () {
        // get references to the DOM elements
        messageInput = document.querySelector('.message-input');
        const sendButton = document.querySelector('.send-button');
        typingIndicator = document.querySelector('.typing-indicator');

        // send a message when the user clicks the send button
        function sendMessage() {
            const message = messageInput.value;
            console.log(message.trim())
            if (message.trim() !== '') {
                displayMessage(message, 'user-message');
                conversationHistory.push({ role: 'user', content: message });
                messageInput.value = '';
                if (hasKey) {
                    typingIndicator.style.display = 'block'; // display the typing indicator
                    sseRequest(message)
                        .then(reader => {
                            typingIndicator.style.display = 'none'; // hide the typing indicator
                            console.log("SSE请求成功");
                            let currentDiv = null;
                            let currentMessage = null;
                            displaySSEMessage(reader, currentDiv, currentMessage, "");
                        })
                        .catch(error => {
                            console.log("SSE请求失败", error);
                            typingIndicator.style.display = 'none'; // hide the typing indicator
                        });
                } else {
                    displayMessage('Set Your API first', 'ai-message');
                    conversationHistory.push({ role: 'assistant', content: 'Set Your ZhiPu API first' });
                }
            }
        }

        sendButton.addEventListener('click', sendMessage);

        messageInput.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();  // prevent the default behavior of the Enter key
                if (event.shiftKey) {
                    // if the user pressed Shift+Enter, insert a newline character
                    messageInput.value += '\n';
                } else {
                    // if the user only pressed Enter, send the message
                    sendMessage();
                }
            }
        });
    });

    function clearHistory() {
        messageHistory.innerHTML = '';
        conversationHistory = [];
        messageInput.value = '';
    }

    function loadToKnowledgeBase(doc_text) {
        return new Promise((resolve, reject) => {
            console.log("加载到知识库: ", doc_text);
            const { origin_mode, origin_value, doc_id } = urlCbParams;
            const url = ApiBase + `/api/v1/knowledge/knowledge_base/import`;

            const headers = {
                'Accept': 'text/event-stream',
                'Content-Type': 'application/json',
            };

            const requestData = {
                "doc": doc_text,
                "knowledge_label": "nanwei_medical",
                // 'custom_id': 'test',
                "meta": {
                    'doc_id': doc_id,
                    'origin_mode': origin_mode,
                    'origin_value': origin_value,
                }
            };

            fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(requestData)
            })
                .then(response => {
                    resolve(response.result);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    function sseRequest(user_message) {
        return new Promise((resolve, reject) => {
            console.log("history: ", conversationHistory);
            const url = ApiBase + `/api/v1/ai_chat/stream_chat_plugin`;
            const headers = {
                'Accept': 'text/event-stream',
                'Content-Type': 'application/json',
            };

            const requestData = {
                "message_type": "text",
                "message": { "text": user_message },
                "session_id": "612a208a-0955-11ef-8ca9-018f3ec0dc97",
                "message_setting": {
                    "collection_name": "nanwei_medical",
                    "summary": "none",
                    "llm_model_name": model,
                }
            };

            fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(requestData)
            })
                .then(response => {
                    const reader = response.body
                        .pipeThrough(new TextDecoderStream())
                        .getReader();
                    resolve(reader);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    function displaySSEMessage(reader, currentDiv, currentMessage, buffer) {
        reader.read().then(function processResult(result) {
            // console.log("stream buffer: ", buffer.length);
            if (result.value === undefined || result.value.includes('event:end') || result.value.includes('event:error') || result.value.includes('event:interrupt') || result.value.includes('event:finish')) {
                // console.log("result.value of stream", result.value);
                console.log("大模型回复：", lastAnswer);
                conversationHistory.push({ role: 'assistant', content: currentMessage });
                return;
            }
            if (currentDiv === null) {
                currentDiv = document.createElement('div');
                currentDiv.classList.add('ai-message');
                messageHistory.appendChild(currentDiv);
            }
            if (currentMessage === null) {
                currentMessage = '';
            }
            const _line = buffer + result.value;
            const lines = _line.split('\n');
            lines.forEach(line => {
                if (line.includes('data') && line.endsWith("}")) {
                    const fragment = line.split('data: ')[1];
                    // console.log(fragment);
                    const jsonFrag = JSON.parse(fragment);

                    const fragText = jsonFrag.result.message.text;
                    currentMessage += fragText;

                    const multiFragText = fragText.split("\n")
                    for (let index in multiFragText) {
                        const subFragText = multiFragText[index];
                        currentDiv.appendChild(document.createTextNode(subFragText));
                        if (index < multiFragText.length - 1) {
                            currentDiv.appendChild(document.createElement('br'));
                        }
                    }
                } else {
                    buffer = line;
                    // console.log(buffer);
                }
            });
            lastAnswer = currentMessage;

            // recursively call processResult() to continue reading data from the stream
            displaySSEMessage(reader, currentDiv, currentMessage, buffer);
        });
    }


    function generateText(text) {
        let lang = window.Asc.plugin.info.lang.substring(0, 2);
        return {
            en: text,
            [lang]: window.Asc.plugin.tr(text)
        }
    };

    function getURLParameters(url) {
        let params = {};
        let queryString = url.split("?")[1];
        if (queryString) {
            let searchParams = new URLSearchParams(queryString);
            for (let param of searchParams.entries()) {
                params[param[0]] = param[1];
            }
        }
        return params;
    };

})(window, undefined);
