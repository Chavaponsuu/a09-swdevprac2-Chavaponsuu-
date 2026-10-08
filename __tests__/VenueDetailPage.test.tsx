import { render, screen } from "@testing-library/react";
import VenueDetailPage from "@/app/(venueinfo)/venue/[vid]/page";

it("shows the venue's full address, daily rental rate, and API image", async () => {
  const page = await VenueDetailPage({
    params: Promise.resolve({ vid: "67d044e0c0062950a985c509" }),
  });
  render(page);

  expect(screen.getByText(/342 Rama IV Road/)).toHaveTextContent(
    "342 Rama IV Road, Pathumwan, Bangkok 10330",
  );
  expect(screen.getByText("90,000 THB / day")).toBeInTheDocument();
  expect(screen.getByRole("img", { name: "The Bloom Pavilion" })).toHaveAttribute(
    "src",
    "https://lh3.googleusercontent.com/d/1GJPsjTt8k-2ILv6A4ER1sRr6yTG_M2f5",
  );
});
