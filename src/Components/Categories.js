import React from "react"

function Categories({ categories, removeCategory, onCategorySelect }) {
  return (
    <div className="box">
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            description={category.description}
            category={category}
            removeCategory={removeCategory}
            onCategorySelect={onCategorySelect}
          />
        ))}
      </ul>
    </div>
  );
}

function CategoryItem({ category, removeCategory, onCategorySelect, description }) {
  // CategoryItem компонент наверное лучше вынести в отдельный компонент?

  return (

      <li className="category" onClick={() => onCategorySelect(description, category.text)}>
        {category.text}
        <button className="categoryDeleteButton"

          type="button"

          onClick={() => removeCategory(category.id)}
          style={{ lineHeight: 1, padding: "0.125rem .25rem" }}
        >
          &times;
        </button>
      </li>

  );
}

export default Categories
