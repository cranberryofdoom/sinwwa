import type { Meta, StoryFn } from "@storybook/react";
import {
  ChecklistDropdown,
  ChecklistSelectableData,
} from "./ChecklistDropdown";
import { useState } from "react";

const meta: Meta<typeof ChecklistDropdown> = {
  title: "Dropdowns/Checklist Dropdown",
};

export default meta;

const data = [
  ["Dallas - Athens KD", "6be1533d-9a12-489b-9137-2967c06436fc"],
  ["Dallas - Dallas", "fd31aad0-5f8f-4239-bfbb-55bbb3a64c7a"],
  ["Dallas - Ennis KD", "1be73a0e-6c21-4f74-8cd1-8aa9ddc429c4"],
  [
    "Dallas - Mount Olive - The Little Mint",
    "0c7c3ad1-d2b4-48c9-9c1e-dac682ca9f69",
  ],
  ["Florence - Arlington", "08117765-7bad-4ab0-9d75-bd2166fd2ff2"],
  ["Florence - Colombia", "857aec4c-6db5-4606-a5fe-272f892cfdeb"],
  ["Florence - Florence", "b5c6660c-c0f0-44a5-a830-d8bd662eee3e"],
  ["Florence - Goldsboro III", "ef27ce86-2c37-4bdc-bb6f-0fa0b3f23b2e"],
  ["Florence - Illington", "dbf9d08b-cdea-4930-ab69-ea06eade2e30"],
  ["Florence - Spout Springs", "4f7b09bf-d063-4e34-8026-3d31a84ea7fa"],
  ["Hickory - ALBEMARLE - 198", "cecc323d-7f74-4acd-9698-b7614441b6e5"],
  ["Hickory - BURNSVILLE - 205", "b837a366-ac86-4888-929f-b6e192ece0bb"],
  ["Hickory - FUQUAY - 66", "b490a8e4-a95b-491c-850f-7689dd137e73"],
  ["Hickory - GREENSBORO - 116", "99f17e0b-8add-4b08-85ff-d79f379e3eb3"],
  ["Hickory - RALEIGH", "eef13450-f5da-4aaa-bd59-1df6176a74b0"],
  ["Hickory - ROCK HILL", "2823735c-73e4-450e-89c4-3b280e7b39c9"],
  ["HWY 55 - AHOSKIE", "19f85345-5bff-45d3-8668-b93d3815a004"],
  ["HWY 55 - ARLINGTON #98", "a960dc3a-de64-4a74-8d16-1b49c568bc47"],
  ["HWY 55 - ATHENS (TX)", "89e915e3-8e81-4a01-9a19-8bb90dc735c9"],
  ["HWY 55 - BARBOURSVILLE", "f4882931-7774-405d-bb00-9e33ea4918c5"],
  ["HWY 55 - BELLS FORK", "fe92c381-9cd5-4226-8a4b-aecef2919822"],
  ["HWY 55 - BENSON", "14b7f354-6001-44c8-a2f0-db6187c5cda6"],
  ["HWY 55 - BEULAVILLE", "9a20916f-9df5-43db-8f53-e732fc8e383d"],
  ["HWY 55 - BOAZ", "7010492d-95c4-4edc-a2af-0100badf5a33"],
  ["HWY 55 BRGR SHAKES/FRIES", "7bf87078-62d3-46a2-88c0-d4b3ac498049"],
  ["HWY 55 - BRUNSWICK", "84e2aeb7-2a58-4276-becf-8b9085c21f63"],
  ["HWY 55 - BURLINGTON", "b809bc8b-3c45-464a-a627-1d809d6d43c2"],
  ["HWY 55-CASTLE  HAYNE", "274109d6-a66b-444e-ba5f-6c7e13de5a06"],
  ["HWY 55 - C/COLLECT11/6/23", "282ffa23-48e0-4f4f-ab8d-ab0ca6c1ab26"],
  ["HWY 55 - CLAYTON", "97f99aed-8a4c-4e9a-8edd-448362ecf0a4"],
  ["HWY 55 - CLINTON #11", "047af60a-8b74-400d-b382-fbacf281a373"],
  ["HWY 55 - COASTAL GRAND", "f58dcb51-ca2a-4edf-81c9-1298153cf7be"],
  ["HWY 55 - CONOVER", "fc6c3bda-c471-42e4-bbde-972701ee25b7"],
  ["HWY 55 - DELCO", "79f4f54c-7670-43a7-861c-a8869ce27f84"],
  ["HWY 55 - DENHAM SPRINGS", "88056eaa-c555-4de8-900a-7f5bd9c2d322"],
  ["HWY 55 - DUNN #73", "98615316-5841-4e7c-8a80-6c22b39134ce"],
  ["HWY 55 - ELIZABETH CITY", "3ed15335-5877-47b8-9516-8caf9d03b174"],
  ["HWY 55 FARMVILLE", "7e15b15c-0732-4d3f-a9a0-413d9a8a30c5"],
  ["HWY 55-FAYETTEVILLE", "225cbc4b-a935-4c78-afab-4e2919d006e1"],
  ["HWY 55-FAYETTEVILLE #186", "083dd314-4f4b-49a2-8a2c-35cd3d2698f1"],
  ["HWY 55 - FORESTVILLE", "4bb83cb1-7cc8-4ce3-a4b9-fcdece14c985"],
  ["HWY 55 - FORT PAYNE", "3d9429ac-5cd7-448e-add4-9094f46c5298"],
  ["HWY 55 - FOUR OAKS #105", "29dd82bc-85d4-4f9a-852a-9310bb50b136"],
  ["HWY 55 - FRONTGATE", "0d87d03e-42c5-4d8b-ac14-a8379e5bd9f6"],
  ["HWY 55 - GARNER - 46", "7f959fa5-c5ba-4b37-a6cd-7fa82ec8639c"],
  ["HWY 55 - GEORGETOWN", "303b4f2b-aa58-49f7-93ac-916df13011a2"],
  ["HWY 55 - GOLDSBORO II", "13f2e8b0-6327-4504-b44b-6861e5c3efee"],
  ["HWY 55 - GOLDSBORO III", "16a5ad34-b61e-4344-a891-756c28336e4b"],
  ["HWY 55 - GREENVILLE", "6ed21961-8126-4f17-a461-6dfbb065ea33"],
  ["HWY 55 -GREENVILLE III", "8858e9e3-6c38-432e-b8d5-41ee169b99e4"],
  ["HWY 55 - GRIFTON", "5f00ae4b-27f2-4b77-b808-1e8e7566b5fd"],
  ["HWY 55 - HAMPSTEAD", "dba89b6b-4373-4df7-9e04-de1f09e6ec94"],
  ["HWY 55 - HAVELOCK #12", "69fefa71-50ab-476d-b09d-e37f4f3365b1"],
  ["HWY 55 - HILLSBOROUGH", "1ed55c67-267b-4bac-be4a-c066b25640d9"],
  ["HWY 55 HOME OFFICE", "601a36ae-6da6-4896-a904-b03da8279679"],
  ["HWY 55 - HOPE MILLS", "8437cd46-2ea5-49aa-9829-3e8c4d31ec87"],
  ["HWY 55 - IRMO #137", "7e4212b0-68d6-4841-861b-829629def799"],
  ["HWY 55 - JACKSONVILLE", "edd4561e-afb9-48b0-b6f6-e489d78616c9"],
  ["HWY 55 - KENANSVILLE", "8dab2520-9daa-46c2-9297-2a46996cfb8d"],
  ["HWY 55 - KENLY #109", "13fcdf24-22e1-4aee-a0ff-d119a7d8a76d"],
  ["HWY 55 - KINGSLAND #182", "3493421d-8173-4e43-8424-cdebee64061f"],
  ["HWY 55 - KINSTON I", "d1d79b52-9539-4e48-85f8-617c45cefd90"],
  ["HWY 55 - KNIGHTDALE #72", "078d2078-02c8-4883-804c-ef399ba8368b"],
  ["HWY 55 - LANCASTER #151", "1314d9eb-afa1-412f-976a-645fe75d7901"],
  ["HWY 55 - LELAND 2", "f6f8c227-f75c-4400-aed8-303a68c63ea2"],
  ["HWY 55 - LENOIR", "468a069f-d7a6-4422-bb86-53bd61278c11"],
  ["HWY 55 - LEXINGTON #126", "ef4d41a0-0d7b-47ff-90f7-e0a04912a672"],
  ["HWY 55 - LILLINGTON", "5915ed47-a896-4eb2-927f-19fab723f064"],
  ["HWY 55 - LOCUST #122", "056d5462-9522-4193-b8c8-f3c0a1084963"],
  ["HWY 55 - LUCOLLECT11/6/23", "1e411dc6-999f-433a-a10a-004966f7a292"],
  ["HWY 55 - MEBANE", "28d79770-0da5-48c4-8333-10182d85e5b5"],
  ["HWY 55 - MOCKSVILLE", "853fae04-15ee-4d6e-9137-d15e3680b255"],
  ["HWY 55 - MONTANA", "62ecafe7-cecd-4dc8-af36-820cd654cdfe"],
  ["HWY 55 -MOREHEAD CITY", "6c16375c-5d89-4eb8-8cd8-d9fff43fc228"],
  ["HWY 55-MURRELL INLET #129", "d4f14de2-6996-4ae2-9f5f-a1528fdae0e4"],
  ["HWY 55 - MUSCLE SHOALS", "79175c28-431b-4c5f-864e-946340098b00"],
  ["HWY 55 - NASHVILLE", "639465f7-06d3-4916-a2ba-9c1b58a7235b"],
  ["HWY 55 - NEW BERN", "d9460c4e-ca10-472d-be48-0d60595de6bb"],
  ["HWY 55 OF MOUNT OLIVE", "e386b163-5710-44df-8d4f-7901c60d4b05"],
  ["HWY 55 - OXFORD", "b793d1dd-d150-4e63-9f92-abdd75e3a84c"],
  ["HWY 55 - PIKEVILLE #57", "cecd5bf1-11fa-47ba-a72d-9734cd3362e5"],
  ["HWY 55 - PINK HILL #61", "47858c61-5d6b-499b-a252-3a31ef71803f"],
  ["HWY 55 - PRINCETON", "584ad596-68f0-482b-9f65-2c58edbcad95"],
  ["HWY 55 - RAEFORD", "3c10fdda-14ec-406f-8b7b-5e194dacff13"],
  ["HWY 55 - RANDLEMAN", "64288a07-c66a-4eb1-bea6-3f6518b2b3c7"],
  ["HWY 55 - RICHLANDS", "c72d106a-e2f5-49b5-b6cf-bb6d82b1bf39"],
  ["HWY 55 - ROANOKE RAPIDS", "76ca72f2-c6bc-458c-9446-ea0ca447bbb3"],
  ["HWY 55 - ROCK HILL - 174", "c90af83e-35c5-4cda-9def-c603123650fa"],
  ["HWY 55 - ROCKINGHAM #87", "82e6d06b-e5b5-4bf3-a6ba-86202c117348"],
  ["HWY 55 - ROCKY MT", "28e040a6-85d4-47b0-86bb-4361cd510c3b"],
  ["HWY 55 - SANFORD", "a6b75aa8-6b30-4b95-8ac5-3efb0964bdcd"],
  ["HWY 55 - SCOLLECT11/6/23", "c6e5360a-2545-48a8-8eee-db24a5dcebaf"],
  ["HWY 55 - SHALLOTTE", "2dd094a4-d505-423f-bbe7-1d51cdb715b7"],
  ["HWY 55 - SHARPSBURG", "1bd28fbe-93e9-460c-a7a0-6985db8d78d0"],
  ["HWY 55 - SNEADS FERRY #55", "d10bd3a0-ca71-4633-b3bd-f2cbc01dfae4"],
  ["HWY 55 - SNOW HILL", "fff0e513-5615-48fc-a393-5504dc2209d2"],
  ["HWY 55-SPOUT SPRINGS", "61a74537-6708-4bd3-a102-fddec96af094"],
  ["HWY 55 - STATESVILLE", "222a8eb1-7a01-47ec-b281-3096d5e2fb79"],
  ["HWY 55 - SURF CITY #50", "64367e39-820e-46f9-8b51-83b0ba449ea4"],
  ["HWY 55 - SWANSBORO #44", "0781d7fa-0190-48fc-a472-8eb78243b41c"],
  ["HWY 55 - TARBORO #102", "f389240b-4676-4e2c-98fa-bbdcb0d3822d"],
  ["HWY 55 TULLAHOMA", "eaf4539d-f6b9-4d6b-a787-da424e5c4c4a"],
  ["HWY 55 - WALLACE", "bb363e60-38a4-40b7-b879-3554aed625bb"],
  ["HWY 55 - WASHINGTON", "e78ece45-ba9c-4102-8a43-6ba89bc1bc07"],
  ["HWY 55 - WHITEVILLE", "4fee7a8a-23eb-48d9-be17-90c142b9e126"],
  ["HWY 55 - WILSON 3", "a2fb2000-df62-4e65-ac68-70b2fb93434e"],
  ["HWY 55 - WILSON II", "2271fdc9-5b8b-45b6-9536-eeea9e4b8b9a"],
  ["HWY 55 - WINCHESTER", "6b5f9c55-797e-4790-b73e-e7751af44500"],
  ["HWY 55 - ZACHARY", "5a797d52-b3ee-4681-8f77-4c5c499e643f"],
  ["HWY 55  - WAYCROSS #194", "0d809c64-c67f-4291-9ed0-951cdd57612c"],
  ["Nashville - Crossville", "ee19cc46-6c75-4469-83dd-6eb5cf5c4a85"],
  ["Nashville - Fayetteville", "a824dfdd-43c4-45c5-8838-d2754f2707af"],
  ["Nashville - Gallatin", "2d1cabf5-c4a1-4e96-9a5e-cc219c968e88"],
  ["Nashville - Guntersville", "296e69c1-5006-4786-8d6f-b9d08cd4892b"],
  ["Nashville - Shakes fries 55058924", "d1414e20-3228-4711-851d-9e738b14301a"],
  [
    "Nashville - Shakes fries 55058928 - SPRING HILL",
    "5356280e-ec18-45e0-86be-05f33187e52e",
  ],
  ["Nashville - Shakes fries 55059290", "3dbe388d-556c-408d-a5cc-078de1f3acd8"],
  [
    "Nashville - Shakes fries NOLENSVILLE",
    "4df5f809-f27b-4717-8635-29bf1bed8c5a",
  ],
  ["Nashville - Shelbyville", "698f1d6c-8a5c-40e7-8c91-c859fcaf3d2b"],
  ["Pacific Northwest - Helena", "2195e0a6-9a36-4513-9033-2f286d934088"],
];


const getLabel = (
  value: (number | string)[],
  dataLength: number,
  name: string,
) => {
  if (value.length === dataLength) {
    return `All ${name}`;
  }
  if (value.length === 0) {
    return undefined;
  }
  return `${value.length} ${name} Selected`;
};

const initialValues = data.map((item) => item[1]);

export const RestaurantLocationsFilters1LevelNestingExample: StoryFn = () => {
  const [value, setValue] = useState<string[]>(initialValues);

  return (
    <ChecklistDropdown
      onApplyChanges={(value) => setValue(value as string[])}
      placeholder="Restaurant Locations"
      label={getLabel(value, data.length, "Locations")}
      value={value}
      selectableData={data.map((item) => ({ id: item[1], label: item[0] }))}
      onReset={() => setValue(initialValues)}
    />
  );
};

const nestedData = [
  [
    611,
    "Performance Foodservice",
    "c01e6a50-81c7-4ce9-8b5e-15ab0401d315",
    421,
    "Florence",
    "0e37e1bf-e293-4c1c-a243-273e2e8df4c6",
  ],
  [
    611,
    "Performance Foodservice",
    "c01e6a50-81c7-4ce9-8b5e-15ab0401d315",
    868,
    "Dallas",
    "cc4ff398-fd00-4d7b-8056-5c789b9c9625",
  ],
  [
    611,
    "Performance Foodservice",
    "c01e6a50-81c7-4ce9-8b5e-15ab0401d315",
    869,
    "Ellenbee",
    "3b6eaa4d-79c9-4a9d-a1fc-88e9bb1832b1",
  ],
  [
    611,
    "Performance Foodservice",
    "c01e6a50-81c7-4ce9-8b5e-15ab0401d315",
    870,
    "Hickory",
    "b4162924-0fd5-455b-a0e0-9bf485ba853a",
  ],
  [
    611,
    "Performance Foodservice",
    "c01e6a50-81c7-4ce9-8b5e-15ab0401d315",
    871,
    "Louisiana",
    "ef12c5f2-66f1-4e48-be60-3661534978ac",
  ],
  [
    611,
    "Performance Foodservice",
    "c01e6a50-81c7-4ce9-8b5e-15ab0401d315",
    872,
    "Nashville",
    "bc86606d-7a06-4777-8e47-ca97a3a0e754",
  ],
  [
    611,
    "Performance Foodservice",
    "c01e6a50-81c7-4ce9-8b5e-15ab0401d315",
    1077,
    "Pacific Northwest",
    "81a7b94f-2acd-48cc-9ca1-8514f6f5ce55",
  ],
  [
    611,
    "Performance Foodservice",
    "c01e6a50-81c7-4ce9-8b5e-15ab0401d315",
    1078,
    "Pacific NW",
    "fc25b7e9-7847-4d7c-87a3-bfacb40872f0",
  ],
  [
    646,
    "Acco",
    "de27f1df-839a-4396-a686-a0b1d8a336e4",
    211,
    "Acco",
    "e1a9453a-d777-48e8-a5ad-b632c496852c",
  ],
];

const initialNestedValues = nestedData.reduce(
  (acc, curr) => {
    const distributionCenterId = curr[3] as number;
    acc.push(distributionCenterId);
    return acc;
  },
  [] as (number | string)[],
);

const nestedSelectableData = nestedData.reduce((acc, curr) => {
  const supplierId = curr[0] as number;
  const supplierName = curr[1] as string;
  const distributionCenterId = curr[3] as number;
  const distributionCenterName = curr[4] as string;
  const existingSupplierFilterOption = acc.find((item) => item.id === curr[0]);
  const distributionCenterFilterOption = {
    label: distributionCenterName,
    id: distributionCenterId,
  };
  if (existingSupplierFilterOption) {
    existingSupplierFilterOption.children?.push(distributionCenterFilterOption);
  } else {
    acc.push({
      label: supplierName,
      id: supplierId,
      children: [distributionCenterFilterOption],
    });
  }
  return acc;
}, [] as ChecklistSelectableData[]);

export const SupplierDCFilters2LevelNestingExample: StoryFn = () => {
  const [value, setValue] = useState<(number | string)[]>(initialNestedValues);

  return (
    <ChecklistDropdown
      onApplyChanges={(value) => setValue(value as number[])}
      placeholder="Suppliers"
      label={getLabel(
        value,
        nestedSelectableData.reduce((acc, curr) => {
          if (curr.children) {
            acc += curr.children.length;
          }
          return acc;
        }, 0),
        "Supplier DCs",
      )}
      value={value}
      selectableData={nestedSelectableData}
      onReset={() => setValue(initialNestedValues)}
    />
  );
};

const evenMoreNestedData = [
  ["Beverages", "Non-Alcoholic", "Coffee"],
  ["Beverages", "Non-Alcoholic", "Juices"],
  ["Beverages", "Non-Alcoholic", "Other"],
  ["Beverages", "Non-Alcoholic", "Soda"],
  ["Beverages", "Non-Alcoholic", "Still Water"],
  ["Food", "Baked/Prepared", "Breads"],
  ["Food", "Baked/Prepared", "Other"],
  ["Food", "Baked/Prepared", "Pastries"],
  ["Food", "Baked/Prepared", "Tortillas"],
  ["Food", "Dairy", "Butter"],
  ["Food", "Dairy", "Buttermilk"],
  ["Food", "Dairy", "Cheese"],
  ["Food", "Dairy", "Cream"],
  ["Food", "Dairy", "Eggs"],
  ["Food", "Dairy", "Ice Cream"],
  ["Food", "Dairy", "Milk"],
  ["Food", "Dairy", "Other"],
  ["Food", "Dry Goods", "Condiments"],
  ["Food", "Dry Goods", "Flour & Mixes"],
  ["Food", "Dry Goods", "Fruits"],
  ["Food", "Dry Goods", "Grains"],
  ["Food", "Dry Goods", "Nuts"],
  ["Food", "Dry Goods", "Oils & Fats"],
  ["Food", "Dry Goods", "Other"],
  ["Food", "Dry Goods", "Preserved Items"],
  ["Food", "Dry Goods", "Processed Produce"],
  ["Food", "Dry Goods", "Snacks"],
  ["Food", "Dry Goods", "Spices And Seasonings"],
  ["Food", "Dry Goods", "Stocks, Sauces, Bases"],
  ["Food", "Dry Goods", "Sweeteners"],
  ["Food", "Dry Goods", "Vinegars"],
  ["Food", "Meats", "Beef"],
  ["Food", "Meats", "Lamb"],
  ["Food", "Meats", "Pork"],
  ["Food", "Meats", "Poultry"],
  ["Food", "Meats", "Sausages"],
  ["Food", "Produce", "Beets"],
  ["Food", "Produce", "Cabbages"],
  ["Food", "Produce", "Celery"],
  ["Food", "Produce", "Cucumbers"],
  ["Food", "Produce", "Fruits"],
  ["Food", "Produce", "Herbs"],
  ["Food", "Produce", "Lettuce"],
  ["Food", "Produce", "Mushrooms"],
  ["Food", "Produce", "Onions"],
  ["Food", "Produce", "Other Leafy Greens"],
  ["Food", "Produce", "Other Vegetables"],
  ["Food", "Produce", "Peppers"],
  ["Food", "Produce", "Potatoes"],
  ["Food", "Produce", "Tomatoes"],
  ["Food", "Seafood", "Fish"],
  ["Food", "Seafood", "Shellfish"],
  ["Other", "Charges & Fees", "Other"],
  ["Other", "Credits", "Other"],
  ["Other", "Deposits", "Other"],
  ["Other", "Other", "Other"],
  ["Other", "Services", "Other"],
  ["Other", "Taxes", "Other"],
  ["Supplies", "Cleaning & Maintenance", "Bleach"],
  ["Supplies", "Cleaning & Maintenance", "Liners/Garbage Bags"],
  ["Supplies", "Cleaning & Maintenance", "Mops"],
  ["Supplies", "Cleaning & Maintenance", "Other Cleaning Fluids"],
  ["Supplies", "Cleaning & Maintenance", "Other"],
  ["Supplies", "Cleaning & Maintenance", "Paper Towels"],
  ["Supplies", "Cleaning & Maintenance", "Toilet Paper"],
  ["Supplies", "Cleaning & Maintenance", "Towel"],
  ["Supplies", "Foh Supplies", "Disposables"],
  ["Supplies", "Foh Supplies", "Other"],
  ["Supplies", "Foh Supplies", "Paper Towels"],
  ["Supplies", "Foh Supplies", "Towel Dispensers"],
  ["Supplies", "Kitchen Supplies", "Food Safety/Personal Protection"],
  ["Supplies", "Kitchen Supplies", "Food Wraps"],
  ["Supplies", "Kitchen Supplies", "Other"],
  ["Supplies", "Kitchen Supplies", "Pots, Pans, Lids"],
  ["Supplies", "Kitchen Supplies", "Uniforms"],
  ["Supplies", "Office Supplies", "Other"],
  ["Supplies", "Office Supplies", "Printer Paper"],
  ["Supplies", "Other", "Other"],
];

const initialEvenMoreNestedValues = evenMoreNestedData.reduce(
  (acc, curr) => {
    const categoryId = ("$parent-1:" +
      curr[0] +
      "$parent-2:" +
      curr[1] +
      "$level-3:" +
      curr[2]);
    acc.push(categoryId);
    return acc;
  },
  [] as (number | string)[],
);

const evenMoreNestedSelectableData = evenMoreNestedData.reduce((acc, curr) => {
  const level1 = curr[0];
  const level2 = curr[1];
  const level3 = curr[2];
  const level1Id = "$level-1:" + curr[0];
  const level2Id = "$parent-1:" + curr[0] + "$level-2:" + curr[1];
  const level3Id =
    "$parent-1:" + curr[0] + "$parent-2:" + curr[1] + "$level-3:" + curr[2];
  const existingLevel1 = acc.find((item) => item.id === level1Id);
  const existingLevel2 = existingLevel1?.children?.find(
    (item) => item.id === level2Id,
  );
  const existingLevel3 = existingLevel2?.children?.find(
    (item) => item.id === level3Id,
  );
  if (existingLevel1) {
    if (existingLevel2) {
      if (existingLevel3) {
        return acc;
      } else {
        existingLevel2.children?.push({
          label: level3,
          id: level3Id,
        });
        return acc;
      }
    } else {
      existingLevel1.children?.push({
        label: level2,
        id: level2Id,
        children: [{ label: level3, id: level3Id }],
      });
      return acc;
    }
  } else {
    acc.push({
      label: level1,
      id: level1Id,
      children: [
        {
          label: level2,
          id: level2Id,
          children: [{ label: level3, id: level3Id }],
        },
      ],
    });
    return acc;
  }
}, [] as ChecklistSelectableData[]);

export const CategoryFilters3LevelNestingExample = () => {
  const [value, setValue] = useState<(number | string)[]>(
    initialEvenMoreNestedValues,
  );

  return (
    <ChecklistDropdown
      onApplyChanges={(value) => setValue(value as string[])}
      placeholder="Categories"
      label={getLabel(value, evenMoreNestedData.length, "Categories")}
      value={value}
      selectableData={evenMoreNestedSelectableData}
      onReset={() => setValue(initialEvenMoreNestedValues)}
    />
  );
};
