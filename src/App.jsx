import "./App.css";
import { Header } from "./layouts/Header/Header";
import { Footer } from "./layouts/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Routes/AppRoutes";
import MainLayout from "./Layouts/MianLayout";
import { ThemeProvider } from "styled-components";
import { theme } from "./Providers/ThemeProvider";

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
