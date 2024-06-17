export interface IChapter {
  chapter: string;
  key: string;
  chapter_id?: string;
  paragraph_list?: IParagraph[];
}

export interface IParagraph {
  paragraph_id: number;
  paragraph_name: string;
  paragraph_list?: IParagraph[]; 
}
