import ChartsContainer from "../components/ChartsContainer";

const TestRenderer = require('react-test-renderer'); import React from "react";

it('ChartContainerTest', () => {
    let root;
    TestRenderer.act(() => {
        root = TestRenderer.create(<ChartsContainer/>)
    });

    expect((root as any)?.toJSON()).toMatchSnapshot();
})
