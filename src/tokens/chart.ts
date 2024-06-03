import { colors } from "./colors";

/**
 * Constants for various chart properties.
 */
export const chart = {
  line: {
    point: {
      size: 8,
      borderWidth: 2,
      style: "circle",
    },
    lines: {
      colors: [
        colors["accent-darkest-cyan"],
        colors["base-magenta"],
        "#716FCA",
        "#FE296B",
        colors["accent-darker-yellow"],
      ],
    },
  },
  pie: {
    slices: {
      colors: [
        "#F94AA5",
        "#A68FFF",
        "#60A9FF",
        "#35D4DD",
        "#A0806A",
        "#666666",
        "#6685A4",
        "#FCE3E9",
        "#B1D9F0",
        "#61D2FA",
        colors["base-yellow"],
      ],
    },
  },
};

export const chartJS = {
  line: {
    datasets: {
      styles: (index: number) => {
        return {
          pointBackgroundColor: colors["base-white"],
          pointBorderColor: chart.line.lines.colors[index],
          pointBorderWidth: chart.line.point.borderWidth,
          pointHoverBorderWidth: 3,
          pointHoverRadius: chart.line.point.size,
          pointHoverBackgroundColor: colors["base-white"],
          pointRadius: chart.line.point.size - chart.line.point.borderWidth,
          borderColor: chart.line.lines.colors[index],
          borderWidth: chart.line.point.borderWidth,
          pointStyle: chart.line.point.style,
        };
      },
    },
    options: {
      plugins: {
        legend: {
          styles: {
            position: "bottom" as const,
            labels: {
              usePointStyle: true,
              boxWidth: chart.line.point.size,
              boxHeight: chart.line.point.size,
            },
          },
        },
      },
      scales: {
        xAxes: {
          title: {
            styles: {
              display: true,
              font: {
                weight: "bold",
              },
            },
          },
        },
        yAxes: {
          title: {
            styles: {
              display: true,
              font: {
                weight: "bold",
              },
            },
          },
        },
      },
    },
  },
};
