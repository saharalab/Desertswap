import { useContext, useEffect } from "react";
import { Tooltip, Area, AreaChart } from "recharts";
import { ToolTipContext } from "@/components/exchange/Context";

const CustomToolTip = ({ active, payload, label }: any) => {
  const { toolTip, setToolTip }: any = useContext<any>(ToolTipContext);
  useEffect(() => {
    // setToolTip({payload, label, active})
    // if ()
  });

  return (
    <div className="max-w-max max-h-max p-2 text-xs bg-lightGray text-white rounded-lg ">
      <span>{payload[0]?.payload?.BUSD} BSUD</span>
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
  const screenWidth = window.innerWidth;
  const AreaCurve: AreaCurveType = "CurveFactory";
  const AreaColor: string = screenWidth >= 600 ? "#373739" : "#fce51c";

  return (
    <div className="w-full h-full sm:h-72 [&_svg]:h-full [&_svg]:w-full ">
      {/* <ResponsiveContainer></ResponsiveContainer> */}
      <AreaChart
        width={800}
        height={300}
        id="Area-chart"
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        {/* <defs>
            <linearGradient id="colorBUSD" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={AreaColor} stopOpacity={0.8} />
              <stop offset="95%" stopColor={AreaColor} stopOpacity={0} />
            </linearGradient>
          </defs> */}
        {/* <YAxis dataKey={"BUSD"} /> */}
        <Tooltip content={<CustomToolTip />} />
        <Area
          connectNulls={true}
          type={AreaCurve}
          dataKey="BUSD"
          stroke={AreaColor}
          strokeWidth={4}
          fillOpacity={1}
          fill="url(#colorBUSD)"
        />
      </AreaChart>
      {/* </ResponsiveContainer> */}

      <div className="max-h-2 text-2xs flex w-full justify-between [&_div]:max-w-max text-white md:text-black/900">
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
    BUSD: 290,
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
    BUSD: 290,
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

  {
    time: "BUSD A",
    BUSD: 4000,
  },

  {
    time: "BUSD A",
    BUSD: 4000,
  },

  {
    time: "BUSD A",
    BUSD: 0,
  },
];
