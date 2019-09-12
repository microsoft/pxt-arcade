import React from 'react';

import { Bitmap } from '../sprite-editor/bitmap';

import '../css/TabBar.css';
import { bitmapToUrl } from '../bitmap_helpers';

interface TabBarProps {
    tabImages: Bitmap[],
    tabChange: (idx: number) => void,
    startTab: number
}
interface TabBarState {
    currentTab: number
}

const R = 10
const ICON_H = 64
const ICON_W = 64
const TAB_MARGIN_T = 10
const TAB_MARGIN_B = 2
const SVG_W = 541
const TAB_SVG_H = R * 2 + ICON_H + TAB_MARGIN_T + TAB_MARGIN_B
const IMG_SPACE = R * 2 + ICON_W
const OUT = TAB_MARGIN_T + TAB_MARGIN_B + 5
const TOTAL_TAB_W = R * 4 + ICON_W

export class TabBar extends React.Component<TabBarProps, TabBarState>
{
    public TabBarSvg: SVGSVGElement | undefined;

    private TOTAL_IMG_SPACE: number;
    private LEFT_SPACE: number;
    private TABS_START: number;

    constructor(props: TabBarProps) {
        super(props);

        this.state = {
            currentTab: props.startTab
        }

        this.TOTAL_IMG_SPACE = IMG_SPACE * this.props.tabImages.length
        this.LEFT_SPACE = (SVG_W - this.TOTAL_IMG_SPACE) / 2
        this.TABS_START = this.LEFT_SPACE - R
    }

    componentDidMount() {
        this.TabBarSvg = this.refs["tab-bar-svg"] as SVGSVGElement
    }
    componentWillUnmount() {
        this.TabBarSvg = undefined
    }

    getTabPath(idx: number): string {
        let tabW = ICON_W + R * 2
        let tabStart = this.TABS_START + tabW * idx
        let tabFinish = SVG_W - (tabStart + tabW)
        let tabPath = `M -${OUT},${(TAB_SVG_H - TAB_MARGIN_B) + OUT} l 0,-${OUT} l ${OUT},0 h ${tabStart} q ${R},0 ${R},-${R} v -${ICON_H} q 0,-${R} ${R},-${R} h ${ICON_W} q ${R},0 ${R},${R} v ${ICON_H} q 0,${R} ${R},${R} h ${tabFinish} l ${OUT},0 l 0,${OUT} z`
        return tabPath
    }

    render() {
        const viewBox = `0 0 ${SVG_W} ${TAB_SVG_H}`
        const tabPath = this.getTabPath(this.state.currentTab)
        const tabImgs = this.props.tabImages
            .map((img, i) => {
                return {
                    x: this.TABS_START + R + R + i * IMG_SPACE,
                    y: TAB_MARGIN_T + R,
                    w: ICON_W,
                    h: ICON_H,
                    idx: i,
                    data: bitmapToUrl(img)
                }
            })
        function clickHandler(this: TabBar, idx: number) {
            this.setState({ currentTab: idx })
            this.props.tabChange(idx)
        }
        return (
            <div ref="tab-bar" className="tab-bar">
                <svg ref="tab-bar-svg" viewBox={viewBox}>
                    <path ref="tab-path" d={tabPath}>
                    </path>
                    {tabImgs.map(i =>
                        <image key={i.idx} x={i.x} y={i.y}
                            width={i.w} height={i.h}
                            href={i.data}
                            onClick={clickHandler.bind(this, i.idx)}></image>)}
                </svg>
            </div>
        );
    }
}

export default TabBar;
