import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const TextEditor = () => {
  const [content, setContent] = useState("");

  const handleChange = (event, editor) => {
    const data = editor.getData();
    setContent(data);
  };

  return (
    <div>
      <CKEditor
       
        editor={ClassicEditor}
        data={content}
        onChange={handleChange}
      />
      <div className="preview">
        <h3>Preview:</h3>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default TextEditor;
