import {
  PureComponent,
  ReactNode,
  useContext,
  useEffect,
  useLayoutEffect,
} from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { ToolTipContext } from "../components/exchange/Context";

const CustomToolTip = ({ active, payload, label }: any) => {
  const { toolTip, setToolTip }: any = useContext<any>(ToolTipContext);
  useEffect(() => {
    // setToolTip({payload, label, active})
    // if ()
  });

  return (
    <div className="p-2 text-xs bg-lightGray text-white rounded-lg">
      <div>{payload[0]?.payload?.time}</div>
    </div>
  );
};

type AreaCurveType =
  | "basis"
  | "basisClosed"
  | "basisOpen"
  | "linear"
  | "linearClosed"
  | "natural"
  | "monotoneX"
  | "monotoneY"
  | "monotone"
  | "step"
  | "stepBefore"
  | "stepAfter"
  | "CurveFactory";

export function PlotGraph() {
  const AreaCurve: AreaCurveType = "step";
  const AreaColor: string = "#00D025";

  return (
    <div className="w-full h-64">
      <ResponsiveContainer>
        <AreaChart
          width={800}
          height={300}
          id="Area-chart"
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorBUSD" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={AreaColor} stopOpacity={0.8} />
              <stop offset="95%" stopColor={AreaColor} stopOpacity={0} />
            </linearGradient>
          </defs>
          {/* <YAxis dataKey={"BUSD"} /> */}
          <Tooltip content={<CustomToolTip />} />
          <Area
            connectNulls={true}
            type={AreaCurve}
            dataKey="BUSD"
            stroke={AreaColor}
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorBUSD)"
          />
        </AreaChart>
      </ResponsiveContainer>

      <div className="flex w-[770px] justify-between">
        <div>2:20 PM</div>
        <div>3:20 PM</div>
        <div>4:20 PM</div>
        <div>5:20 PM</div>
      </div>
    </div>
  );
}

const data = [
  {
    time: "BUSD A",
    BUSD: 0,
  },
  {
    time: "BUSD B",
    BUSD: 300,
  },
  {
    time: "BUSD C",
    BUSD: 200,
  },
  {
    time: "BUSD D",
    BUSD: 480,
  },
  {
    time: "BUSD E",
    BUSD: 2890,
  },
  {
    time: "BUSD F",
    BUSD: 1890,
  },
  {
    time: "BUSD D",
    BUSD: 390,
  },
  {
    time: "BUSD A",
    BUSD: 4000,
  },
];
