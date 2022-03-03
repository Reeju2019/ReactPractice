import { shallow } from "enzyme"
import ReactDOM from "react-dom"
import { CarouselComponent } from "."

const item = {
  items: [
    {
      id: 1,
      img: "https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png",
      alt: "Image One label",
      header: "First slide label",
      caption: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      id: 2,
      img: "/assets/images/carousel-2.jfif",
      alt: "Image two label",
      header: "2 slide label",
      caption: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      button: "button",
      textArea: "textArea",
    },
    {
      id: 3,
      alt: "Image 3 labelll",
      header: "3 slide label",
      caption: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
}

/**
 * Unit testing for Carousel Component
 */
describe("Carousel Component Testing", () => {
  it("render without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(
      <CarouselComponent
        interval={5000}
        nextIcon={
          <span aria-hidden="true" className="carousel-control-next-icon" />
        }
        prevIcon={
          <span aria-hidden="true" className="carousel-control-prev-icon" />
        }
        data={item}
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
  it("should render initial layout", () => {
    const component = shallow(
      <CarouselComponent
        interval={5000}
        nextIcon={
          <span aria-hidden="true" className="carousel-control-next-icon" />
        }
        prevIcon={
          <span aria-hidden="true" className="carousel-control-prev-icon" />
        }
        data={item}
      />
    )
    expect(component.getElements()).toMatchSnapshot()
  })
})
