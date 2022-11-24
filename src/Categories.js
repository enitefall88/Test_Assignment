import React from "react"

function Categories({ categories, removeCategory }) {
  return (
    <div>
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            category={category}
            removeCategory={removeCategory}
          />
        ))}
      </ul>
    </div>
  );
}

function CategoryItem({ category, removeCategory }) {
  // CategoryItem компонент наверное лучше вынести в отдельный компонент?
  return (
    <div>
      <li>
        {category.text}
        <button
          type="button"

          onClick={() => removeCategory(category.id)}
          className="btn btn-secondary ml-2"
          style={{ lineHeight: 1, padding: "0.125rem .25rem" }}
        >
          &times;
        </button>
      </li>
    </div>
  );
}

export default Categories
