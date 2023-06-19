import { Link } from "react-router-dom";
import Button, { TYPE } from "../Button/Button";

function ButtonLink({ type = TYPE.blue, content, path }) {
  return (
    <Link to={path}>
      <Button type={type} content={content} />
    </Link>
  );
}

export default ButtonLink;
