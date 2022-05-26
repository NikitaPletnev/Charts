import ChartItem from "../components/ChartItem";
const TestRenderer = require('react-test-renderer'); import React from "react";
import {testValueItem} from "./testValue";

it('ChartItemTest', () => {
    let root;
    TestRenderer.act(() => {
        root = TestRenderer.create(<ChartItem opt={testValueItem}/>)
    });

    expect((root as any)?.toJSON()).toMatchSnapshot();
})
