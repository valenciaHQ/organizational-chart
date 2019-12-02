import React, { useState } from "react";
import { Wrapper, Tags, Tag, TagText, AddTagInput } from "./styled";
import { CloseIcon } from "../../styled";

const TagsInput = ({ selectedIds }) => {
  const [tags, setTags] = useState([]);
  const addTags = event => {
    if (event.key === "Enter" && event.target.value !== "") {
      setTags([...tags, event.target.value]);
      event.target.value = "";
      selectedIds(tags);
    }
  };

  const removeTags = index => {
    setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    selectedIds(tags);
  };

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
