import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import Categories from "./components/Categories";
import { ShowFullItem } from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItems: [],
      orders: [],
      items: [
        {
          id: 1,
          title: "стул ",
          img: "chair.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 2,
          title: "стол ",
          img: "table.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          category: "table",
          price: "99.99",
        },
        {
          id: 3,
          title: "зеркало ",
          img: "mirror.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          category: "mirror",
          price: "19.99",
        },
        {
          id: 4,
          title: "кровать ",
          img: "bed.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          category: "bed",
          price: "129.99",
        },
        {
          id: 5,
          title: "шкаф",
          img: "closet.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          category: "wardrobe",
          price: "79.99",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.onShowItem = this.onShowItem.bind(this);
    this.state.currentItems = this.state.items;
    this.chooseCat = this.chooseCat.bind(this);
    this.delOrder = this.delOrder.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header onDel={this.delOrder} orders={this.state.orders} />
        <Categories chooseCat={this.chooseCat} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />
        {this.state.showFullItem && (
          <ShowFullItem
            onShowItem={this.onShowItem}
            onAdd={this.addToOrder}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }
  chooseCat(cat) {
    if (cat === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === cat),
    });
  }

  delOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let inAr = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) inAr = true;
    });
    if (!inAr) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
