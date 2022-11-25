import React from "react"

function Categories({ categories, removeCategory, displaySelectedCategory }) {
  return (
    <div className="box">
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            category={category}
            removeCategory={removeCategory}
            displaySelectedCategory={displaySelectedCategory}
          />
        ))}
      </ul>
    </div>
  );
}

function CategoryItem({ category, removeCategory, displaySelectedCategory }) {
  // CategoryItem компонент наверное лучше вынести в отдельный компонент?

  return (
    <div className="category">
      <li onClick={() => {displaySelectedCategory(category.description)}}>
        {category.text}
        <button className="categoryDeleteButton"

          type="button"

          onClick={() => removeCategory(category.id)}
          style={{ lineHeight: 1, padding: "0.125rem .25rem" }}
        >
          &times;
        </button>
      </li>
    </div>
  );
}

export default Categories
