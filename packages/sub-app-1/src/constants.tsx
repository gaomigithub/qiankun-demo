
import Chat from "./pages/Chat";
import NewReportManager from "./pages/NewReport";
import TmplateManager from "./pages/Template";
import VarnameManager from "./pages/Varname";
import VarnameRuleManager from "./pages/VarnameRule";
import AiAssistant from './pages/AiAssistant'

export const pageMap: Record<number, React.ReactNode> = {
  1: <TmplateManager />,
  2: <VarnameManager />,
  3: <NewReportManager />,
  7: <VarnameRuleManager />,
  8: <AiAssistant />,
  0: <Chat />
}

export const DEFAULT_NAME = ""

export const DEFAULT_MENU = {

}