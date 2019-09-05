import React from 'react';

import { Bitmap } from '../sprite-editor/bitmap';

import '../css/TabBar.css';
import { createPngImg } from '../bitmap_helpers';

interface TabBarProps {
    tabImages: Bitmap[]
}
interface TabBarState {
    currentTab: number
}

export class TabBar extends React.Component<TabBarProps, TabBarState>
{
    public TabBarSvg: SVGSVGElement | undefined;

    constructor(props: TabBarProps) {
        super(props);
    }

    componentDidMount() {
        this.renderTabBar();
    }
    componentWillUnmount() {
        this.TabBarSvg = undefined
    }

    mkTabBar(): SVGSVGElement {
        let topBarHolder = this.refs["sprite-picker"] as HTMLDivElement
        let topBarSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        let tabEl = document.createElementNS("http://www.w3.org/2000/svg", "path")
        const R = 10
        const ICON_H = 64
        const ICON_W = 64
        const TAB_MARGIN_T = 10
        const TAB_MARGIN_B = 20
        const SVG_W = 541
        const TAB_SVG_H = R * 2 + ICON_H + TAB_MARGIN_T + TAB_MARGIN_B
        const IMG_SPACE = R * 2 + ICON_W
        const TOTAL_IMG_SPACE = IMG_SPACE * this.props.tabImages.length
        const LEFT_SPACE = (SVG_W - TOTAL_IMG_SPACE) / 2
        const OUT = TAB_MARGIN_T + TAB_MARGIN_B + 5

        topBarSvg.setAttribute('viewBox', `0 0 ${SVG_W} ${TAB_SVG_H}`)
        const TOTAL_TAB_W = R * 4 + ICON_W
        const TABS_START = LEFT_SPACE - R
        function setTab(idx: number) {
            let tabW = ICON_W + R * 2
            let tabStart = TABS_START + tabW * idx
            let tabFinish = SVG_W - (tabStart + tabW)
            let tabPath = `M -${OUT},${(TAB_SVG_H - TAB_MARGIN_B) + OUT} l 0,-${OUT} l ${OUT},0 h ${tabStart} q ${R},0 ${R},-${R} v -${ICON_H} q 0,-${R} ${R},-${R} h ${ICON_W} q ${R},0 ${R},${R} v ${ICON_H} q 0,${R} ${R},${R} h ${tabFinish} l ${OUT},0 l 0,${OUT} z`
            tabEl.setAttribute("d", tabPath)
        }
        setTab(0)
        topBarSvg.appendChild(tabEl)
        topBarHolder.appendChild(topBarSvg)

        function getImages(ts: string) {
            let imgRegex = /img`([\d\s\.a-f]*)`/gm
            let match = imgRegex.exec(ts);
            let res: string[] = []
            while (match != null) {
                res.push(match[1])
                match = imgRegex.exec(ts);
            }
            return res
        }

        let targetImgs = this.props.tabImages
        targetImgs.forEach(b => console.log(`(${b.width},${b.height})`));

        // imgsAsBmps
        //     .filter(i1 => targetImgs.some(i2 => i1.equals(i2)))
        targetImgs
            .forEach((img, i) => {
                let x = TABS_START + R + R + i * IMG_SPACE
                let y = TAB_MARGIN_T + R
                // let imgSvg = createSvgImg(x, y, img)
                let imgSvg = createPngImg(x, y, ICON_W, ICON_W, img)
                imgSvg.setAttribute("data-idx", "" + i)
                imgSvg.addEventListener("click", () => {
                    let idx = parseInt(imgSvg.getAttribute("data-idx"))
                    setTab(idx)
                })
                topBarSvg.appendChild(imgSvg)
            })

        return topBarSvg;
    }

    renderTabBar() {
        this.TabBarSvg = this.mkTabBar()

        let sp = this.refs["sprite-picker"] as HTMLDivElement
        sp.appendChild(this.TabBarSvg)
    }

    render() {


        return (
            <div ref="sprite-picker" className="sprite-picker">
            </div>
        );
    }
}

export default TabBar;
