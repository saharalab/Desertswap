import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { Tooltip, Area, AreaChart, ResponsiveContainer } from "recharts";
import { ToolTipContext } from "@/components/exchange/Context";
import { useWindowSize } from "@/custom-hooks";
import { faker } from "@faker-js/faker";
import { number } from "zod";
import { FakeDataGeneratorReturnsType } from "@/faker-data/PlotGraph";

const CustomToolTip = ({
  active,
  payload,
  label,
  setCoinPrice,
  coinPrice,
}: any) => {
  const { toolTip, setToolTip }: any = useContext<any>(ToolTipContext);

  useEffect(() => {
    // setToolTip({payload, label, active})
    // if ()
    if (coinPrice !== payload[0]?.payload?.BUSD) {
      payload[0]?.payload?.BUSD
        ? setCoinPrice(payload[0]?.payload?.BUSD)
        : coinPrice;
    }
  });

  return (
    <div className="max-w-max max-h-max p-2 text-xs bg-supernova/80 text-black rounded-lg ">
      <span>{payload[0]?.payload?.time}</span>
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

export function PlotGraph({
  viewChartBy,
  setViewChartBy,
  coinPrice,
  setCoinPrice,
  graphColor,
  graphData,
}: {
  viewChartBy: "monthly" | "weekly" | "hourly";
  setViewChartBy: Dispatch<SetStateAction<"monthly" | "weekly" | "hourly">>;
  coinPrice: number;
  setCoinPrice: Dispatch<SetStateAction<number>>;
  graphColor: string;
  graphData: FakeDataGeneratorReturnsType
}) {
  const [xAxisDataKey, setXAxisDataKey] = useState<string[]>([
    "2:20 PM",
    "3:20 PM",
    "4:20 PM",
    "5:20 PM",
  ]);

  const { width: screenWidth }: { width: number } = useWindowSize();

  const AreaCurve: AreaCurveType = "monotone";

  const AreaColor: string = graphColor;

  // const AreaColor: string = screenWidth >= 600 ? "#373739" : "#fce51c";

  useEffect(() => {
    
  })

  useEffect(() => {
    if (viewChartBy === "hourly") {
      setXAxisDataKey(["2:20 PM", "3:20 PM", "4:20 PM", "5:20 PM"]);
    } else if (viewChartBy === "weekly") {
      setXAxisDataKey(["Aug 16", "Aug 18", "Aug 21", "Aug 23"]);
    } else if (viewChartBy === "monthly") {
      setXAxisDataKey(["Jul 24", "Aug 03", "Aug 13", "Aug 23"]);
    }
  }, [viewChartBy]);

  return (
    <div className="w-full h-full sm:h-72 [&_svg]:h-full [&_svg]:w-full ">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={800}
          height={300}
          id="Area-chart"
          data={graphData[viewChartBy]}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorBUSD" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={AreaColor} stopOpacity={0.8} />
              <stop offset="95%" stopColor={AreaColor} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip
            content={<CustomToolTip {...{ coinPrice, setCoinPrice }} />}
          />
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
      <div className="pr-6 max-h-2 text-2xs flex w-full justify-between [&_div]:max-w-max text-white md:text-black/900">
        {xAxisDataKey.map((dataKey: string, idx: number) => (
          <div key={idx}>{dataKey}</div>
        ))}
      </div>
    </div>
  );
}
