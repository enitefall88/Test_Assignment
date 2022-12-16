import React from "react";

function Categories({ categories, removeCategory, onCategorySelect, showModal }) {
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
  // CategoryItem компонент наверное лучше вынести в отдельный компонент?

  return (
    <li className="category" onClick={() => onCategorySelect(id)}>
      {category.text}
      <button
        className="categoryDeleteButton"
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          showModal(id)
          console.log(id)

        }}
        style={{ lineHeight: 1, padding: "0.125rem .25rem" }}
      >
        &times;
      </button>
    </li>
  );
}

export default Categories;
