# Crypto Dashboard

This is a Next-based Crypto Dashboard that displays cryptocurrency data, including price, market cap, and a price chart with customizable time ranges. The app leverages modern UI components and responsive design principles for an intuitive user experience.

## Demo Video


https://github.com/user-attachments/assets/cb560b08-aaa2-4007-9fe0-23ceee7d4475



## Features

- **Cryptocurrency Overview**: Displays the name, symbol, price, market cap, and rank of a cryptocurrency.
- **Responsive Design**: Adapts to different screen sizes, with tailored button sizes for small devices.
- **Customizable Time Ranges**: View price charts for multiple timeframes, including 1H, 24H, 7D, 1M, 3M, 6M, 1Y, and ALL.
- **Dynamic Data Fetching**: Retrieves real-time data from CoinGecko API for multiple cryptocurrencies.
- **Trending Coins**: Displays the top 3 trending coins from CoinGecko's `/search/trending` API with their logos, symbols, prices, and price graphs.
- **You May Also Like**: Shows a carousel of related trending coins with their logo, symbol, price, price change, and price graph.
- **TradingView Integration**: Integrated TradingView widget to show real-time price charts of cryptocurrencies.
- **Dynamic URL Routing (Optional Task Completed)**: The app allows users to dynamically display data and charts based on the cryptocurrency selected in the URL, such as `/bitcoin` or `/ethereum`, fetching the relevant data from CoinGecko.

## Installation

To set up the project locally, follow the steps below:

### Prerequisites

- npm (or yarn)

### Steps to Run the Project Locally

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/crypto-dashboard.git
    ```

2. **Install Dependencies**:
    ```bash
    cd frontend
    npm install
    ```

3. **Run the Development Server**:
    ```bash
    npm run dev
    ```

4. **Open the Project in Your Browser**:
    Visit `http://localhost:3000` in your browser to view the app.

## APIs Used

1. **CoinGecko API**:  
   - Fetch cryptocurrency price data: `/simple/price?ids=bitcoin&vs_currencies=usd,inr&include_24hr_change=true`
   - Fetch trending coins: `/search/trending`
   - Fetch detailed information about a specific coin (used for dynamic URLs): `/coins/{id}`

2. **TradingView API**:  
   - Embedded chart widget for displaying live cryptocurrency price charts.

## Mandatory Tasks

- Implemented all the components as given in the Figma design.
- Integrated Coingecko’s `/simple/price` API to fetch the price of Bitcoin in USD and INR.
- Embedded TradingView’s charts for Bitcoin in place of the chart component.
- Displayed the top 3 trending coins using Coingecko’s `/search/trending` API.
- Created a responsive design according to the Figma design.

## Optional Task Completed

- Implemented dynamic routing where the app can display cryptocurrency data based on the URL. For example:
  - `/bitcoin` shows Bitcoin’s data and chart.
  - `/ethereum` shows Ethereum’s data and chart.
- Utilized Coingecko’s `/coins/{id}` API to fetch the relevant symbol and TradingView chart for the coin selected in the URL.

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS
- **APIs**: CoinGecko API, TradingView Widget
- **Deployment**: Vercel

## Acknowledgments

- **Figma**: For the initial design used for the UI layout.
https://www.figma.com/file/VRj5MqVPoQdj5N7AwmYc98?embed_host=notion&kind=file&mode=design&node-id=0-1&page-selector=0&t=x8gdUiF5gA3sjRd3-0&type=design&viewer=1
- **CoinGecko**: For providing the cryptocurrency data API.
- **TradingView**: For providing the charting widget.
