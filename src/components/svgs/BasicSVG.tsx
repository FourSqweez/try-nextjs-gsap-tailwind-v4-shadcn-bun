import { checkpoints } from "@/app/(lesson)/(animate-svg)/basic-svg/page";
import * as React from "react";

type ClickHandlers = {
  [key in keyof typeof checkpoints]: () => void;
};

type Props = React.SVGProps<SVGSVGElement> & {
  onPlaceClick?: ClickHandlers;
};

export const BasicSVG = ({
  onPlaceClick = {} as ClickHandlers,
  ...props
}: Props) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 800 300"
    xmlSpace="preserve"
    {...props}
  >
    <style type="text/css">
      {
        "\n\t.st0{fill:#E4ECF9;}\n\t.st1{fill:none;stroke:#006699;stroke-width:20;stroke-linejoin:round;stroke-miterlimit:2.5837;}\n\t.st2{fill:#0A5A90;}\n\t.st3{font-family:'Kanit-ExtraBold';}\n\t.st4{font-size:12px;}\n\t.st5{fill:#D00059;}\n\t.st6{opacity:0;fill:#F90B0B;}\n\t.st7{fill:#D87727;}\n\t.st8{fill:#31B7DB;}\n\t.st9{fill:#208E86;}\n\t.st10{fill:#FFFFFF;}\n\t.st11{fill:#6699FF;}\n\t.st12{fill:none;stroke:#0A5A90;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:2.5837;}\n\t.st13{fill:#6598FD;}\n"
      }
    </style>
    <rect id="bg" x={-0.1} y={-0.2} className="st0" width={800} height={300} />
    <path
      id="motionpath"
      className="st1"
      d="M55.9,166.8c0,0,192,99,277,34s126-117,220-118s111,74,156,84"
    />
    <g id="school" onClick={onPlaceClick.school} style={{ cursor: "pointer" }}>
      <text
        transform="matrix(1 0 0 1 691.9189 284.5947)"
        className="st2 st3 st4"
      >
        {"SCHOOL"}
      </text>
      <g transform="matrix( 1, 0, 0, 1, -45,15.6) ">
        <g>
          <g id="Layer1_3_FILL">
            <path
              className="st5"
              d="M767.7,205.8c0-3.9,0-7.8,0-11.7c-4.4-2.2-8.2-2.2-11.3,0c-3.6,2.6-7.3,2.6-11.1,0c0,3.9,0,7.8,0,11.7 c4,2.2,7.7,2.2,11.1,0C759.5,203.7,763.3,203.6,767.7,205.8 M771.5,224.1h3.6l-29.7-16.7l-29.2,16.7h3.6v30.4h80.8v-25.3h-29.3 V224.1z"
            />
          </g>
        </g>
      </g>
      <rect x={664} y={204} className="st6" width={100} height={82} />
    </g>
    <g
      id="dogpark"
      onClick={onPlaceClick.dogpark}
      style={{ cursor: "pointer" }}
    >
      <text
        transform="matrix(1 0 0 1 657.9189 81.5947)"
        className="st2 st3 st4"
      >
        {"DOG PARK"}
      </text>
      <g transform="matrix( 1, 0, 0, 1, -22,0) ">
        <g>
          <g id="Layer1_2_FILL">
            <path
              className="st7"
              d="M736.2,22.3c-1.4,2.6-2.5,4-3.4,4c-9,3.2-17.7,3.2-26.2,0c-8.4-4.1-14.6-10.2-18.5-18.3l-2.2,5.2l-2.7-3.2 l0.8,7.8L684,18l-12.8,16l0.1,0c-0.1,0.3-0.2,0.6-0.2,0.9c0,0.5,0.2,0.9,0.5,1.3c0.4,0.4,0.8,0.6,1.3,0.6c0.4,0,0.7-0.1,1-0.3 l2,1.9c0.7,0.6,1.8,0.9,3.2,1c2.8,0.2,5.8-0.8,9.1-3.2l2.5,6.8l0.2,1c1.3,6.6,1.3,12.6,0,18.1c0,1.1,0.4,2.1,1.3,2.9 c0.8,0.8,1.8,1.2,2.9,1.2c1.2,0,2.2-0.4,3-1.2c0.8-0.8,1.2-1.7,1.2-2.9v-8.4c11,5.5,20.7,6.1,29,1.9l-0.4,7.1 c0,1,0.4,1.8,1.3,2.5c0.8,0.7,1.8,1.1,2.9,1.1c1.1,0,2.1-0.4,3-1.1c0.8-0.7,1.2-1.5,1.2-2.5c-1.6-10.7-1.6-21.4,0-32.1 c1.3-1.6,2.5-3.3,3.5-5c2.1-3.5,2.3-5.5,0.6-6.1C738.8,18.8,737.5,19.8,736.2,22.3 M685.2,23.1c0.6,0,1,0.2,1.4,0.6 c0.4,0.4,0.6,0.9,0.6,1.4c0,0.5-0.2,1-0.6,1.4c-0.4,0.4-0.8,0.6-1.4,0.6c-0.6,0-1-0.2-1.4-0.6c-0.4-0.4-0.6-0.9-0.6-1.4 c0-0.6,0.2-1.1,0.6-1.4C684.2,23.3,684.6,23.1,685.2,23.1z"
            />
          </g>
        </g>
      </g>
      <rect x={646} y={4} className="st6" width={82} height={82} />
    </g>
    <g id="candy" onClick={onPlaceClick.candy} style={{ cursor: "pointer" }}>
      <text
        transform="matrix(1 0 0 1 372.9189 253.5947)"
        className="st2 st3 st4"
      >
        {"CANDY STORE"}
      </text>
      <g transform="matrix( 1, 0, 0, 1, 0,0) ">
        <g>
          <g id="Layer1_1_FILL">
            <path
              className="st8"
              d="M430.4,232.8c0-0.5-0.4-0.9-1.1-1.2c-0.8-0.3-1.7-0.5-2.8-0.5s-2,0.2-2.8,0.5c-0.8,0.3-1.1,0.7-1.1,1.2 c0,0.5,0.4,0.9,1.1,1.2c0.8,0.3,1.7,0.5,2.8,0.5s2-0.2,2.8-0.5C430,233.6,430.4,233.2,430.4,232.8 M431.6,234.7 c0,0.5,0.4,0.9,1.1,1.2c0.8,0.3,1.7,0.5,2.8,0.5s2-0.2,2.8-0.5c0.8-0.3,1.1-0.7,1.1-1.2c0-0.5-0.4-0.9-1.1-1.2 c-0.8-0.3-1.7-0.5-2.8-0.5s-2,0.2-2.8,0.5C432,233.8,431.6,234.2,431.6,234.7 M415.2,229.3c-0.8,0.3-1.1,0.7-1.1,1.2 c0,0.5,0.4,0.9,1.1,1.2c0.8,0.3,1.7,0.5,2.8,0.5c1.1,0,2-0.2,2.8-0.5c0.8-0.3,1.1-0.7,1.1-1.2c0-0.5-0.4-0.9-1.1-1.2 s-1.7-0.5-2.8-0.5S416,229,415.2,229.3 M434.5,228.2c-0.8-0.3-1.7-0.5-2.8-0.5s-2,0.2-2.8,0.5c-0.8,0.3-1.1,0.7-1.1,1.2 c0,0.5,0.4,0.9,1.1,1.2s1.7,0.5,2.8,0.5s2-0.2,2.8-0.5s1.1-0.7,1.1-1.2C435.6,228.9,435.3,228.5,434.5,228.2 M430.8,224 c-0.8,0.3-1.1,0.7-1.1,1.2s0.4,0.9,1.1,1.2c0.8,0.3,1.7,0.5,2.8,0.5s2-0.2,2.8-0.5c0.8-0.3,1.1-0.7,1.1-1.2s-0.4-0.9-1.1-1.2 s-1.7-0.5-2.8-0.5S431.5,223.7,430.8,224 M427.9,227.1c0-0.5-0.4-0.9-1.1-1.2s-1.7-0.5-2.8-0.5s-2,0.2-2.8,0.5s-1.1,0.7-1.1,1.2 c0,0.5,0.4,0.9,1.1,1.2c0.8,0.3,1.7,0.5,2.8,0.5s2-0.2,2.8-0.5C427.5,228,427.9,227.6,427.9,227.1 M399.8,236.9l2.1,1.7 l28.4-34.3c2.1,1.4,4.5,2,7.1,1.8c3-0.3,5.4-1.6,7.4-3.9c1.9-2.3,2.8-5,2.5-8c-0.3-3-1.6-5.4-4-7.4c-2.3-1.9-4.9-2.7-7.9-2.5 c-3,0.3-5.5,1.6-7.4,3.9c-1.9,2.3-2.7,5-2.4,8c0.2,2.5,1.1,4.6,2.8,6.4L399.8,236.9 M404.1,190.9l-16.7,18 c-1.2,1.3-1.8,2.8-1.7,4.6c0,1.3,0.4,2.5,1.2,3.5l-5,0.4l7.7,7.1L389,219c1,0.6,2.1,0.8,3.4,0.8c1.8-0.1,3.3-0.8,4.5-2.1 l16.7-18c1.2-1.3,1.8-2.9,1.7-4.7c0-1.6-0.5-2.9-1.5-4.1l5.6,0.1l-7.4-6.8v5.3c-1-0.6-2.2-0.8-3.5-0.8 C406.8,188.9,405.3,189.6,404.1,190.9z"
            />
          </g>
        </g>
      </g>
      <rect x={370} y={182} className="st6" width={95} height={82} />
    </g>
    <g id="home" onClick={onPlaceClick.home} style={{ cursor: "pointer" }}>
      <text
        transform="matrix(1 0 0 1 64.9189 118.5947)"
        className="st2 st3 st4"
      >
        {"HOME"}
      </text>
      <g transform="matrix( 1, 0, 0, 1, -10.75,-17.4) ">
        <g>
          <g id="Layer1_0_FILL">
            <path
              className="st9"
              d="M97,62.7c-0.7-0.5-1.3-0.4-2,0l-11.6,7.4v-3.7c0-0.1,0-0.3,0-0.4H69.1c0,0.1,0,0.2,0,0.4L69,79.7l-4.5,3 v10.7c0.1-0.1,0.2-0.1,0.2-0.2l3.2-2c0,0.1,0,0.1,0,0.2v32.5h10.6V98.6h18v25.2h26.9V91.4c0-0.4-0.1-0.7-0.3-1l4.4,2.8V82.4 L97,62.7 M102.9,110.8V99.4h13v11.4H102.9z"
            />
          </g>
        </g>
      </g>
      <rect x={44} y={39} className="st6" width={82} height={82} />
    </g>
    <g id="herman">
      <g transform="matrix( 1, 0, 0, 1, 0,0) ">
        <g>
          <g id="mon_0_Layer1_0_FILL">
            <path
              className="st10"
              d="M56.8,159.9C56.9,159.9,56.9,159.9,56.8,159.9c-0.2-0.5-0.5-0.8-0.8-1.2C56.3,159.1,56.6,159.5,56.8,159.9  M42.3,157.9c2.1-2.9,3.1-6.1,3-9.6c-0.1-5-1.5-9.7-4.1-14c-0.3-0.4-0.6-0.8-1-1.2c-1-1.2-2.2-2.2-3.4-3.2 c-4.2-3.3-8.4-3.7-12.7-1.1c-4.5,2.7-6.8,6.6-7,11.8c0,0.5,0,0.9,0,1.4c0,0.2,0,0.3,0,0.5c0.2,4.4,1.7,8.3,4.5,11.7 c1.7,2.1,3.8,3.5,6.3,4.3C32.6,160.1,37.5,159.9,42.3,157.9 M47.9,126.2c-1.4,0.5-2.7,1.6-3.8,3.1c-0.8,1-1.5,2.2-2.4,3.8 c-0.2,0.4-0.4,0.8-0.6,1.2c2.6,4.3,4,9,4.1,14c0.1,3.6-0.9,6.8-3,9.6c0.6-0.2,1.2-0.4,1.8-0.6c1.8-0.8,3.5-1.2,5-1.3 c-1.1,0-1.9,0.1-2.3,0.1c-1,0.1-2.1,0.5-3.2,1.1c1.1-0.6,2.2-1,3.2-1.1c0.4-0.1,1.2-0.1,2.3-0.1c0.8-0.1,1.6,0,2.3,0.1 c1.9,0.3,3.4,1.2,4.6,2.6c0.4,0.4,0.7,0.8,0.9,1.2c1.5-0.9,2.7-1.8,3.5-2.5c0.9-0.9,1.9-2,2.8-3.3c2.1-3,3.3-6.2,3.7-9.6 c0.2-1.5,0.2-3.1,0-4.7c-0.3-2.8-0.9-5.2-1.8-7.2c-1-2.3-2.5-4.2-4.6-5.8c-1.7-1.4-3.6-2.1-5.8-2.1 C52.8,124.7,50.5,125.2,47.9,126.2z"
            />
            <path
              className="st11"
              d="M49.7,156c-0.3,0-0.5,0-0.7,0c-1.5,0.1-3.2,0.6-5,1.3c-0.6,0.2-1.2,0.4-1.8,0.6c-4.8,2-9.6,2.2-14.5,0.5 c-2.5-0.8-4.6-2.3-6.3-4.3c-2.9-3.4-4.4-7.3-4.5-11.7c0-0.2,0-0.3,0-0.5c-0.7,0.7-1.3,1.4-2,2.1c-1.8,1.8-3.3,3.8-4.6,6 c-1.1,1.8-1.9,3.7-2.6,5.7c-0.7,2.2-1.2,4.5-1.4,6.9c-0.2,2.5-0.1,5,0.4,7.6c0.4,2.5,1.1,4.8,2.2,7.2c1,2.3,2.3,4.5,3.9,6.5 c1.5,1.8,5,4.3,10.5,7.5c11.3,0.5,24.6-0.2,39.7-2c0.7-0.5,1.3-1.1,2-1.7c6.7-6.2,10.1-13.8,10.1-22.6c0-7.9-2.7-14.8-8.1-20.6 c-0.4,3.4-1.6,6.6-3.7,9.6c-0.9,1.4-1.9,2.5-2.8,3.3c-0.8,0.7-2,1.6-3.5,2.5c0,0,0,0,0,0c0.4,0.5,0.6,1.1,0.8,1.7 c0,0.1,0.1,0.2,0.1,0.3c0.3,0.8,0.4,1.7,0.4,2.6c0,0.1,0,0.3,0,0.4c0,0.4,0,0.7-0.1,1.1c-0.3,1.7-1.1,3.2-2.4,4.5 c-0.6,0.6-1.3,1.2-2.1,1.5c-0.4,0.2-0.8,0.4-1.1,0.5c-0.9,0.3-1.8,0.4-2.8,0.4c-2.3,0-4.4-0.8-6-2.5c-0.2-0.2-0.5-0.5-0.7-0.7 c-1-1-2.2-1.8-3.6-2.5c-2.7-1.4-4.9-1.5-6.6-0.3c1.7-1.2,3.9-1.1,6.6,0.3c1.4,0.7,2.6,1.6,3.6,2.5c0.2,0.3,0.4,0.5,0.7,0.7 c1.7,1.7,3.7,2.5,6,2.5c1,0,1.9-0.1,2.8-0.4c0.4-0.1,0.8-0.3,1.1-0.5c0.7-0.4,1.4-0.9,2.1-1.5c1.3-1.3,2.1-2.8,2.4-4.5 c0.1-0.4,0.1-0.7,0.1-1.1c0-0.1,0-0.3,0-0.4c0-0.9-0.1-1.8-0.4-2.6c0-0.1-0.1-0.2-0.1-0.3c-0.2-0.6-0.5-1.1-0.8-1.7c0,0,0,0,0,0 c0,0,0,0-0.1,0c-0.3-0.4-0.5-0.9-0.8-1.2c-0.1-0.1-0.1-0.2-0.2-0.2C54.1,156.8,52.1,156,49.7,156 M46.4,161.1 c1.1-1,2.3-1.5,3.8-1.5c1.5,0,2.8,0.5,3.8,1.5c0.3,0.2,0.5,0.5,0.7,0.7c0.6,0.8,0.9,1.8,0.9,2.8c0,0.3,0,0.7-0.1,1 c-0.2,1-0.7,1.8-1.5,2.6c-1.1,1-2.3,1.5-3.8,1.5c-1.5,0-2.8-0.5-3.8-1.5c-0.5-0.5-0.9-1-1.2-1.6c-0.3-0.6-0.4-1.3-0.4-2 C44.8,163.3,45.3,162.1,46.4,161.1 M49,156c0.2,0,0.5,0,0.7,0c2.3,0,4.4,0.8,6,2.5c0.1,0.1,0.1,0.2,0.2,0.2 c-1.2-1.5-2.7-2.3-4.6-2.6C50.6,156,49.8,155.9,49,156 M41.1,134.3c0.2-0.4,0.4-0.8,0.6-1.2c-0.4,0-0.7,0-1.1,0 c-0.2,0-0.4,0-0.5,0C40.4,133.5,40.8,133.9,41.1,134.3z"
            />
            <path
              className="st2"
              d="M50.2,159.6c-1.5,0-2.8,0.5-3.8,1.5c-1.1,1-1.6,2.2-1.6,3.5c0,0.7,0.1,1.4,0.4,2c0.3,0.6,0.7,1.1,1.2,1.6 c1.1,1,2.3,1.5,3.8,1.5c1.5,0,2.8-0.5,3.8-1.5c0.8-0.7,1.3-1.6,1.5-2.6c0.1-0.3,0.1-0.7,0.1-1c0-1.1-0.3-2-0.9-2.8 c-0.2-0.3-0.4-0.5-0.7-0.7C53,160.1,51.7,159.6,50.2,159.6z"
            />
          </g>
        </g>
        <g>
          <path
            id="mon_0_Layer1_0_1_STROKES"
            className="st12"
            d="M41.7,133.1c0.8-1.6,1.6-2.9,2.4-3.8c1.2-1.5,2.5-2.6,3.8-3.1 c2.6-1,4.9-1.5,6.9-1.5c2.2,0,4.1,0.7,5.8,2.1c2,1.6,3.5,3.5,4.6,5.8c0.9,2,1.5,4.4,1.8,7.2c0.2,1.6,0.2,3.1,0,4.7 c5.4,5.8,8.1,12.7,8.1,20.6c0,8.8-3.4,16.4-10.1,22.6c-0.6,0.6-1.3,1.2-2,1.7c-0.7,0.5-1.3,1-2,1.5 M40.1,133.1 c0.3,0.4,0.7,0.8,1,1.2c0.2-0.4,0.4-0.8,0.6-1.2c-0.4,0-0.7,0-1.1,0C40.5,133.1,40.3,133.1,40.1,133.1c-1-1.2-2.2-2.2-3.4-3.2 c-4.2-3.3-8.4-3.7-12.7-1.1c-4.5,2.7-6.8,6.6-7,11.8c0,0.5,0,0.9,0,1.4c0,0.2,0,0.3,0,0.5c0.2,4.3,1.7,8.2,4.5,11.7 c1.7,2.1,3.8,3.5,6.3,4.3c4.9,1.6,9.7,1.5,14.5-0.5c2.1-2.9,3.1-6.1,3-9.6c-0.1-5-1.5-9.7-4.1-14 M49,156c0.2,0,0.5,0,0.7,0 c2.3,0,4.4,0.8,6,2.5c0.1,0.1,0.1,0.2,0.2,0.2c-1.2-1.5-2.7-2.3-4.6-2.6C50.6,156,49.8,155.9,49,156c-1.5,0.1-3.2,0.6-5,1.3 c-0.6,0.2-1.2,0.4-1.8,0.6 M43.5,157.2c1.1-0.6,2.2-1,3.2-1.1c0.4-0.1,1.2-0.1,2.3-0.1 M56.9,159.9 C56.9,159.9,56.9,159.9,56.9,159.9c0.4,0.5,0.6,1.1,0.8,1.7c0,0.1,0.1,0.2,0.1,0.3c0.3,0.8,0.4,1.7,0.4,2.6c0,0.1,0,0.3,0,0.4 c0,0.4-0.1,0.7-0.1,1.1c-0.3,1.7-1.1,3.2-2.4,4.5c-0.6,0.6-1.3,1.2-2.1,1.5c-0.4,0.2-0.8,0.4-1.1,0.5c-0.9,0.3-1.8,0.4-2.8,0.4 c-2.3,0-4.4-0.8-6-2.5c-0.2-0.2-0.5-0.5-0.7-0.7c-1-1-2.2-1.8-3.6-2.5c-2.7-1.4-4.9-1.5-6.6-0.3 M56.9,159.9 C56.9,159.9,56.9,159.9,56.9,159.9c-0.3-0.4-0.6-0.8-0.9-1.2C56.3,159.1,56.6,159.5,56.9,159.9c1.5-0.9,2.7-1.8,3.5-2.5 c0.9-0.9,1.9-2,2.8-3.3c2.1-3,3.3-6.2,3.7-9.6 M23.3,191.3c-5.5-3.2-9-5.7-10.5-7.5c-1.6-2-2.9-4.2-3.9-6.5 c-1-2.3-1.7-4.7-2.2-7.2c-0.4-2.5-0.5-5-0.4-7.6c0.2-2.4,0.6-4.7,1.4-6.9c0.6-2,1.5-3.9,2.6-5.7c1.3-2.2,2.8-4.2,4.6-6 c0.7-0.7,1.3-1.4,2-2.1"
          />
        </g>
      </g>
      <g transform="matrix( 1, 0, 0, 1, 11.95,-64.05) ">
        <g transform="matrix( 1, 0, 0, 1, 0,0) ">
          <g>
            <g id="eyes_0_Layer0_0_FILL">
              <path
                className="st2"
                d="M29.7,205.2c-0.6-0.6-1.2-0.8-2-0.8c-0.8,0-1.5,0.3-2,0.8c-0.6,0.6-0.8,1.2-0.8,2s0.3,1.5,0.8,2 s1.2,0.8,2,0.8c0.8,0,1.5-0.3,2-0.8s0.8-1.2,0.8-2S30.2,205.7,29.7,205.2 M43.9,201.5c-0.5,0.5-0.7,1.1-0.7,1.8 s0.2,1.3,0.7,1.8c0.5,0.5,1.1,0.7,1.8,0.7s1.3-0.2,1.8-0.7c0.5-0.5,0.7-1.1,0.7-1.8s-0.2-1.3-0.7-1.8c-0.5-0.5-1.1-0.7-1.8-0.7 S44.4,201,43.9,201.5z"
              />
            </g>
          </g>
        </g>
      </g>
      <g transform="matrix( 1, 0, 0, 1, -33.55,88.75) ">
        <g transform="matrix( 1, 0, 0, 1, 0,0) ">
          <g>
            <g id="foot_0_Layer0_0_FILL">
              <path
                className="st13"
                d="M76,100.7c-3.6-3.4-7-5.1-10.4-5.2c-3.3-0.1-5.9,1.1-7.7,3.5c-1.8,2.5-2,4.9-0.6,7.3 c1.4,2.4,7.3,2.2,17.9-0.4C77.1,103.7,77.4,102,76,100.7z"
              />
            </g>
          </g>
          <g>
            <path
              id="foot_0_Layer0_0_1_STROKES"
              className="st12"
              d="M57.4,106.4c-1.4-2.4-1.2-4.8,0.6-7.2c1.8-2.5,4.3-3.6,7.7-3.5 c3.3,0.1,6.8,1.8,10.4,5.2c1.3,1.2,1.1,3-0.8,5.2C64.7,108.6,58.8,108.8,57.4,106.4z"
            />
          </g>
        </g>
      </g>
      <g transform="matrix( 0.99993896484375, 0.0086212158203125, -0.0086212158203125, 0.99993896484375, 47.7,84.65) ">
        <g transform="matrix( 1, 0, 0, 1, 0,0) ">
          <g>
            <g id="foot2_0_Layer0_0_FILL">
              <path
                className="st11"
                d="M20.4,108.8c0.9-2.6,0.1-4.7-2.4-6.3c-5.1-3.3-9.8-4.5-14.1-3.7c-1.9,0.3-4.2,2.5-6.9,6.4 c-1,1.4-0.7,3.1,0.7,5C8.1,111.5,15.7,111,20.4,108.8z"
              />
            </g>
          </g>
          <g>
            <path
              id="foot2_0_Layer0_0_1_STROKES"
              className="st12"
              d="M20.4,108.8c0.9-2.6,0.1-4.7-2.4-6.3c-5.1-3.3-9.8-4.5-14.1-3.7 c-1.9,0.3-4.2,2.5-6.9,6.4c-1,1.4-0.7,3.1,0.7,5C8.1,111.5,15.7,111,20.4,108.8z"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);
export default BasicSVG;
