import { useEffect, useState } from "react";

function TagScreen() {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    fetch("http://blog-api/tag")
      .then((resp) => resp.json())
      .then((json) => setTags(json));
  }, []);

  <tbody>
    <table>
      {tags.map((tag) => {
        return (
          <tr key={tag.Id_tag}>
            <td>{tag.title}</td>
            <td></td>
          </tr>
        );
      })}
    </table>
  </tbody>;
}

export default TagScreen;
