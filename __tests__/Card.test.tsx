import { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Card from "@/components/Card";

const venue = {
  vid: "67d044e0c0062950a985c509",
  venueName: "The Bloom Pavilion",
  imgSrc: "/images/bloom.jpg",
};

describe("Card rating", () => {
  it.each([
    {},
    { rating: 0 },
    { onRatingChange: () => {} },
  ])("hides the rating when its props are incomplete: %o", (ratingProps) => {
    render(<Card {...venue} {...ratingProps} />);

    expect(screen.queryAllByRole("radio")).toHaveLength(0);
    expect(screen.getByRole("img", { name: venue.venueName })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: venue.venueName })).toHaveAttribute(
      "src",
      venue.imgSrc,
    );
    expect(screen.getByRole("link")).toHaveAttribute("href", `/venue/${venue.vid}`);
  });

  it("uses a directly displayable URL for a Google Drive API image", () => {
    render(
      <Card
        {...venue}
        imgSrc="https://drive.google.com/uc?id=1GJPsjTt8k-2ILv6A4ER1sRr6yTG_M2f5"
      />,
    );

    expect(screen.getByRole("img", { name: venue.venueName })).toHaveAttribute(
      "src",
      "https://lh3.googleusercontent.com/d/1GJPsjTt8k-2ILv6A4ER1sRr6yTG_M2f5",
    );
  });

  it("allows rating an initially unrated venue when both props are supplied", () => {
    function RatedCard() {
      const [rating, setRating] = useState(0);

      return (
        <>
          <Card {...venue} rating={rating} onRatingChange={setRating} />
          <output aria-label="Selected rating">{rating}</output>
        </>
      );
    }

    render(<RatedCard />);
    fireEvent.click(screen.getByRole("radio", { name: "3 Stars" }));

    expect(screen.getByLabelText("Selected rating")).toHaveTextContent("3");
  });
});
