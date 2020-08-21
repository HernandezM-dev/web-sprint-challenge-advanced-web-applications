import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import Bubbles from "./Bubbles";
import {fetchBubbles as mockFetchBubbles} from '../components/FetchBubbles'

jest.mock('../components/FetchBubbles')
const bubbleData = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff"
    },
    id: 1
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc"
    },
    id: 2
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff"
    },
    id: 3
  },
]

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  mockFetchBubbles.mockResolvedValueOnce(bubbleData)
  render(<BubblePage/>)
  render(<Bubbles colors={bubbleData}/>)
  screen.debug
});
