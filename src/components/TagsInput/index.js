import React, { useState, useEffect } from "react";
import { Wrapper, Tags, Tag, TagText, AddTagInput } from "./styled";
import { CloseIcon } from "../../styled";

const TagsInput = ({ selectedIds, clear }) => {
  const [tags, setTags] = useState([]);
  const addTags = event => {
    if (event.key === "Enter" && event.target.value !== "") {
      const newTags = [...tags, event.target.value];
      event.target.value = "";
      setTags(newTags);
      selectedIds(newTags);
    }
  };

  const removeTags = index => {
    const newTags = [...tags.filter(tag => tags.indexOf(tag) !== index)];
    setTags(newTags);
    selectedIds(newTags);
  };

  useEffect(() => {
    setTags([]);
  }, [clear]);

  return (
    <Wrapper>
      <Tags>
        {tags.map((tag, index) => (
          <Tag key={index}>
            <TagText>{tag}</TagText>
            <CloseIcon onClick={() => removeTags(index)} />
          </Tag>
        ))}
      </Tags>
      <AddTagInput
        type="text"
        onKeyUp={event => (event.key === "Enter" ? addTags(event) : null)}
      />
    </Wrapper>
  );
};
export default TagsInput;
