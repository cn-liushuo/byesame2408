import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import sum from "@/test";
import router from "./router";

// 导入定制主体文件
import "./theme.css";

const total = sum(1, 2);
console.log("total", total);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
