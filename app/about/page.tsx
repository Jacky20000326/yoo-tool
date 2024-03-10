import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
const about = () => {
    return (
        <div>
            <Button type="primary" icon={<SearchOutlined />}>
                Search
            </Button>
        </div>
    );
};

export default about;
