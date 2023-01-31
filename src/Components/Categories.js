import React from "react";
import "../styles.css";
function Categories({
  categories,
  removeCategory,
  onCategorySelect,
  showModal,
}) {
  return (
    <div className="box">
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            id={category.id}
            category={category}
            removeCategory={removeCategory}
            onCategorySelect={onCategorySelect}
            showModal={showModal}
          />
        ))}
      </ul>
    </div>
  );
}

function CategoryItem({ category, onCategorySelect, id, showModal }) {
  return (
    <li className="category" onClick={() => onCategorySelect(id)}>
      <a
        href="all"
        onClick={(e) => {
          e.preventDefault();
          () => onCategorySelect(id);
        }}
      >
        {category.text}{" "}
      </a>
      <button
        className="category-delete-button"
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          showModal(id);
          console.log(id);
        }}
        style={{ lineHeight: 1 }}
      >
        &times;
      </button>
    </li>
  );
}

export default Categories;
