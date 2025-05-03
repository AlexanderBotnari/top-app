import React, { JSX } from "react";
import { Button, Htag, Input, P, Rating, Tag, Textarea } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1" className="htagbyme">Main Page</Htag>
      <Button appearance="primary" arrow="right">Apply</Button>
      <Button appearance="ghost" arrow="down">Apply</Button>
      <P size="s">
        Студенты освоят не только hard skills, необходимые для работы веб-дизайнером,
        но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, 
        разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.
      </P>
      <Tag size="s" color="primary">Primary</Tag>
      <Tag size="m" color="ghost">Ghost</Tag>
      <Tag size="s" color="red">Red</Tag>
      <Tag size="m" color="gray">Gray</Tag>
      <Tag size="s" color="green">Green</Tag>
      <Rating rating={4} isEditable={true} />
      <Input placeholder='test' />
      <br />
      <Textarea placeholder='please leave a comment' />
    </>
  );
}