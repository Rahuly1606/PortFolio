import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const DRAW_EASE = [0.65, 0, 0.35, 1] as const;

type DrawProps = {
  path: string;
  viewBox?: string;
  className?: string;
  duration?: number;
  delay?: number;
  color?: string;
  strokeWidth?: number;
  reverse?: boolean;
  replay?: boolean;
  label?: string;
};

export function SVGDrawAnimation({
  path,
  viewBox = "0 0 100 100",
  className,
  duration = 1.1,
  delay = 0,
  color = "currentColor",
  strokeWidth = 2,
  reverse = false,
  replay = false,
  label,
}: DrawProps) {
  const reduce = useReducedMotion();
  const hiddenOffset = reverse ? -1 : 1;

  return (
    <svg
      viewBox={viewBox}
      className={className}
      fill="none"
      aria-hidden={label ? undefined : true}
      aria-label={label}
      preserveAspectRatio="none"
    >
      <motion.path
        d={path}
        pathLength={1}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ strokeDashoffset: reduce ? 0 : hiddenOffset, opacity: 0 }}
        whileInView={{ strokeDashoffset: 0, opacity: 1 }}
        viewport={{ once: !replay, amount: 0.35 }}
        transition={{
          duration: reduce ? 0.01 : duration,
          delay: reduce ? 0 : delay,
          ease: DRAW_EASE,
        }}
        style={{ strokeDasharray: 1 }}
      />
    </svg>
  );
}

export function HandwrittenText({
  children,
  className,
  delay = 0,
  color = "currentColor",
}: {
  children: string;
  className?: string;
  delay?: number;
  color?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 300 80" className={className} role="img" aria-label={children}>
      <motion.text
        x="4"
        y="56"
        fill="transparent"
        stroke={color}
        strokeWidth="0.8"
        strokeLinecap="round"
        fontFamily="Caveat, cursive"
        fontSize="52"
        initial={{ strokeDasharray: 520, strokeDashoffset: reduce ? 0 : 520, opacity: 0 }}
        whileInView={{ strokeDashoffset: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: reduce ? 0.01 : 1.35, delay: reduce ? 0 : delay, ease: DRAW_EASE }}
      >
        {children}
      </motion.text>
    </svg>
  );
}

export function DrawnCircle({
  className,
  delay = 0.4,
  color = "currentColor",
}: Omit<DrawProps, "path">) {
  return (
    <SVGDrawAnimation
      path="M9 51C11 19 43 6 86 8C132 10 172 24 181 49C190 74 154 91 103 92C53 94 12 79 9 51C6 27 35 12 77 9"
      viewBox="0 0 190 100"
      className={className}
      duration={1.35}
      delay={delay}
      color={color}
      strokeWidth={2.4}
    />
  );
}

export function DrawnUnderline({
  className,
  delay = 0.1,
  color = "currentColor",
}: Omit<DrawProps, "path">) {
  return (
    <SVGDrawAnimation
      path="M3 12C35 8 68 8 102 11C130 14 160 13 197 7C164 15 131 17 99 14C62 11 32 14 4 17"
      viewBox="0 0 200 24"
      className={className}
      duration={0.9}
      delay={delay}
      color={color}
      strokeWidth={2.2}
    />
  );
}

export function HandDrawnArrow({
  className,
  delay = 0.2,
  color = "currentColor",
  reverse = false,
}: Omit<DrawProps, "path">) {
  return (
    <SVGDrawAnimation
      path="M4 8C27 8 48 20 67 36C77 44 86 52 96 60M96 60C87 56 79 55 71 55M96 60C91 51 89 44 89 36"
      viewBox="0 0 104 68"
      className={className}
      duration={1}
      delay={delay}
      color={color}
      strokeWidth={2.3}
      reverse={reverse}
    />
  );
}

export function HandDrawnBorder({
  className,
  delay = 0.1,
  color = "currentColor",
}: Omit<DrawProps, "path">) {
  return (
    <SVGDrawAnimation
      path="M7 12C55 7 142 7 193 11C199 58 198 137 192 190C143 195 54 194 9 189C5 140 5 57 7 12Z"
      viewBox="0 0 200 200"
      className={className}
      duration={1.5}
      delay={delay}
      color={color}
      strokeWidth={2}
    />
  );
}

export function HandDrawnStar({
  className,
  delay = 0.2,
  color = "currentColor",
}: Omit<DrawProps, "path">) {
  return (
    <SVGDrawAnimation
      path="M25 2C24 14 23 20 19 25C14 29 9 30 2 31C11 32 17 34 21 39C24 43 25 49 26 58C27 48 29 42 33 38C37 34 43 32 51 31C43 30 37 28 33 24C28 19 27 12 25 2Z"
      viewBox="0 0 54 60"
      className={className}
      duration={0.9}
      delay={delay}
      color={color}
      strokeWidth={1.8}
    />
  );
}

export function HandwrittenSignature({
  className,
  delay = 0.2,
  color = "currentColor",
}: Omit<DrawProps, "path">) {
  return (
    <svg
      viewBox="0 0 310 90"
      className={className}
      fill="none"
      role="img"
      aria-label="Rahul Kumar signature"
    >
      <motion.path
        d="M8 62C22 33 32 20 40 22C49 25 43 44 34 60C29 69 29 71 36 61C47 46 54 34 62 32C68 30 69 39 64 48C60 56 59 62 64 61C72 59 79 43 86 35C91 29 96 31 93 39C88 52 85 61 91 60C98 58 106 43 114 34C121 26 126 29 122 39C117 51 116 60 122 59C130 58 137 40 145 34C151 29 155 32 152 41C148 51 149 57 154 57C163 55 170 40 177 34C184 29 190 32 186 43C182 54 183 59 190 57C202 53 210 38 218 31C224 26 231 27 228 38C225 48 220 59 226 59C236 57 246 41 254 32C260 26 265 30 260 41C256 52 257 59 264 58C274 57 284 47 300 30"
        pathLength={1}
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, delay, ease: DRAW_EASE }}
      />
      <motion.path
        d="M76 74C130 82 211 79 281 68"
        pathLength={1}
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: delay + 1.35, ease: DRAW_EASE }}
      />
    </svg>
  );
}

export function HandDrawnLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`relative inline-flex items-center justify-center px-4 py-2 ${className ?? ""}`}
    >
      <HandDrawnBorder className="absolute inset-0 h-full w-full" />
      <span className="relative font-hand text-xl leading-none">{children}</span>
    </span>
  );
}
