import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Routes/AppRoutes";
import MainLayout from "./Layouts/MianLayout";
import { ThemeProvider } from "styled-components";
import { theme } from "./Providers/ThemeProvider";
import { Header } from "./Layouts/Header/Header";
import { Footer } from "./Layouts/Footer/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainLayout>
          <Header />
          <AppRoutes />
          <Footer />
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
