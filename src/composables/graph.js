import { ref, computed, onMounted } from "vue";
import { useDataStore } from "@/store/index";

export function useDataGraph() {
  const store = useDataStore();

  const selectedCategory = ref();
  const tableItems = ref(store.getTableItems);
  const categoryValues = computed(() => 
    Array.isArray(tableItems.value)
      ? tableItems.value.map((el) => el[selectedCategory.value])
      : []
  );

  const xAxisDuplicates = computed(() =>
    Array.isArray(categoryValues.value)
      ? [...new Set(categoryValues.value)].map(
          (value) =>
            new Object({
              value: value,
              duplicateCount: categoryValues.value.filter(
                (str) => str === value
              ).length,
            })
        )
      : []
  );

  function getSeriesData() {
    const xAxisCategories = [];
    const seriesData = [];

    xAxisDuplicates.value.forEach((el) => {
      if (el.duplicateCount > 1) {
        if (el.value !== undefined) {
          xAxisCategories.push(el.value);
        } else {
          xAxisCategories.push("undefined");
        }
        seriesData.push(el.duplicateCount);
      }
    });

    series.value[0].data = seriesData;
    options.value.xaxis.categories = xAxisCategories;
  }

  const options = ref({
    chart: {
      type: "bar",
    },
    xaxis: {
      categories: [],
      title: {
        text: "Values",
      },
    },
    yaxis: {
      title: {
        text: "Amount of duplicates",
      },
    },
    responsive: [
      {
        breakpoint: 900,
        options: {
          plotOptions: {
            bar: {
              horizontal: true,
            },
          },
        },
      },
    ],
  });

  const series = ref([
    {
      data: [],
    },
  ]);

  return {
    series,
    selectedCategory,
    options,
    getSeriesData,
    tableItems,
  };
}
