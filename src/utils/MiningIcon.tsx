export function MiningIcon() {
  return (
    <svg
      height={26}
      width={72}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient id="mining_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset={0} stopColor="#fec59b" />
          <stop offset={1} stopColor="#f63a02" />
        </linearGradient>
        <linearGradient
          id="mining_svg__f"
          x1="50%"
          x2="50%"
          y1="19.048%"
          y2="100%"
        >
          <stop offset={0} stopColor="#ffeadd" />
          <stop offset={1} stopColor="#ffe804" />
        </linearGradient>
        <linearGradient
          id="mining_svg__g"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="25.592%"
        >
          <stop offset={0} stopColor="#e4531b" />
          <stop offset={1} stopColor="#ffb99f" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="mining_svg__h" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset={0} stopColor="#ffeccf" />
          <stop offset={1} stopColor="#ffada1" />
        </linearGradient>
        <linearGradient
          id="mining_svg__i"
          x1="50%"
          x2="9.013%"
          y1="20.414%"
          y2="66.345%"
        >
          <stop offset={0} stopColor="#ffe804" />
          <stop offset={1} stopColor="#fff4ed" />
        </linearGradient>
        <linearGradient id="mining_svg__n" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset={0} stopColor="#fff4ed" />
          <stop offset={1} stopColor="#ffe804" />
        </linearGradient>
        <filter
          id="mining_svg__d"
          height="181.2%"
          width="254.3%"
          x="-77.1%"
          y="-40.6%"
        >
          <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation="1.5"
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 1 0 0 0 0 0.419607843 0 0 0 0 0.411764706 0 0 0 1 0"
          />
        </filter>
        <filter id="mining_svg__j" height="100%" width="100%" x="0%" y="0%">
          <feGaussianBlur in="SourceGraphic" />
        </filter>
        <filter id="mining_svg__l" height="100%" width="100%" x="0%" y="0%">
          <feGaussianBlur in="SourceGraphic" />
        </filter>
        <filter
          id="mining_svg__p"
          height="157.1%"
          width="151.4%"
          x="-25.7%"
          y="-28.6%"
        >
          <feGaussianBlur
            in="SourceAlpha"
            result="shadowBlurInner1"
            stdDeviation={1}
          />
          <feOffset dy={-1} in="shadowBlurInner1" result="shadowOffsetInner1" />
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            k2={-1}
            k3={1}
            operator="arithmetic"
            result="shadowInnerInner1"
          />
          <feColorMatrix
            in="shadowInnerInner1"
            values="0 0 0 0 1 0 0 0 0 0.419607843 0 0 0 0 0.411764706 0 0 0 0.641495711 0"
          />
        </filter>
        <path id="mining_svg__e" d="M7.583 9.917h5.834V21H7.583z" />
        <path
          id="mining_svg__a"
          d="M7.583 3.5C6.438 1.512 5.06.345 3.45 0 2.59.114 2.356 1.377 1.765 2.044c-.476.537-1.13.682-1.659 1.275s.762 3.714 7.477 2.013V3.5z"
        />
        <path
          id="mining_svg__b"
          d="M7.583 3.5C6.438 1.512 5.06.345 3.45 0 2.59.114 2.356 1.377 1.765 2.044c-.476.537-1.13.682-1.659 1.275s.762 3.714 7.477 2.013V3.5z"
        />
        <path id="mining_svg__o" d="M7.583 5.25h5.834v5.25H7.583z" />
        <mask id="mining_svg__k" fill="#fff">
          <use fillRule="evenodd" xlinkHref="#mining_svg__a" />
        </mask>
        <mask id="mining_svg__m" fill="#fff">
          <use fillRule="evenodd" xlinkHref="#mining_svg__b" />
        </mask>
      </defs>
      <g fill="none" fillRule="evenodd">
        <rect fill="#f85823" height={16} rx={8} width={60} x={6} y={5} />
        <text
          fill="#fff"
          fillRule="nonzero"
          fontFamily="PingFangSC-Medium, PingFang SC"
          fontSize={11}
          fontWeight={400}
        >
          <tspan x="23.45" y={16}>
            Mining
          </tspan>
        </text>
        <path
          d="M1.167 10.5h18.666V19a2 2 0 01-2 2H3.167a2 2 0 01-2-2z"
          fill="url(#mining_svg__c)"
        />
        <use
          fill="#000"
          filter="url(#mining_svg__d)"
          xlinkHref="#mining_svg__e"
        />
        <use fill="url(#mining_svg__f)" xlinkHref="#mining_svg__e" />
        <path
          d="M1.167 10.5h18.666V17a4 4 0 01-4 4H5.167a4 4 0 01-4-4z"
          fill="url(#mining_svg__g)"
        />
        <g transform="translate(1.75)">
          <path d="M7.583 3.5h2.334v1.75H7.583z" fill="url(#mining_svg__h)" />
          <use fill="url(#mining_svg__i)" xlinkHref="#mining_svg__a" />
          <path
            d="M8.75 5.284C4.623 4.878 1.846 4.197.42 3.24c-2.138-1.434-.608 2.312 2.221 2.98 1.886.445 3.922.132 6.109-.937z"
            fill="#fdab2f"
            filter="url(#mining_svg__j)"
            mask="url(#mining_svg__k)"
            opacity="0.5"
          />
          <g transform="matrix(-1 0 0 1 17.5 0)">
            <use fill="url(#mining_svg__i)" xlinkHref="#mining_svg__b" />
            <path
              d="M8.75 5.284C4.623 4.878 1.846 4.197.42 3.24c-2.138-1.434-.608 2.312 2.221 2.98 1.886.445 3.922.132 6.109-.937z"
              fill="#fdab2f"
              filter="url(#mining_svg__l)"
              mask="url(#mining_svg__m)"
              opacity="0.5"
            />
          </g>
        </g>
        <rect
          fill="url(#mining_svg__c)"
          height="5.25"
          rx={2}
          width={21}
          y="5.25"
        />
        <use fill="url(#mining_svg__n)" xlinkHref="#mining_svg__o" />
        <use
          fill="#000"
          filter="url(#mining_svg__p)"
          xlinkHref="#mining_svg__o"
        />
      </g>
    </svg>
  );
}
