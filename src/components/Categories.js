import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { key: "all", name: "Всё" },
        { key: "table", name: "Стол" },
        { key: "chairs", name: "Стул" },
        { key: "mirror", name: "Зеркало" },
        { key: "wardrobe", name: "Шкаф" },
        { key: "bed", name: "Кровать" },
      ],
    };
  }

  render() {
    return (
      <div className="cat">
        {this.state.categories.map((el) => (
          <div key={el.key} onClick={() => this.props.chooseCat(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
