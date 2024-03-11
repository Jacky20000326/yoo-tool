"use client";
import React from "react";
import MahJong from "../_component/Matching/MahJong";
import Porker from "../_component/Matching/Porker";
import Styled from "./matching.module.css";
import { useState } from "react";
import { Select } from "antd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const matching = () => {
    const [mode, setMode] = useState("mahJong");
    const handleChange = (value: { value: string; label: React.ReactNode }) => {
        setMode((mode) => (mode = value.value));
    };
    return (
        <>
            <Select
                labelInValue
                defaultValue={{ value: "mahJong", label: "麻將配牌" }}
                style={{ width: 180, margin: "20px 0px 0px 20px" }}
                onChange={handleChange}
                options={[
                    {
                        value: "mahJong",
                        label: "麻將配牌",
                    },
                    {
                        value: "poker",
                        label: "撲克牌配牌",
                    },
                ]}
            />
            <DndProvider backend={HTML5Backend}>
                <div className={Styled.matchingContainer}>
                    {mode == "mahJong" ? <MahJong /> : <Porker />}
                </div>
            </DndProvider>
        </>
    );
};

export default matching;
