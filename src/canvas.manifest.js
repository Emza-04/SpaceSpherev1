export const manifest = {
  screens: {
    scr_zhsnvp: { name: "Home", route: "/", position: { "x": 160, "y": 220 } },
    scr_6rbqng: { name: "Property Listings", route: "/listings", position: { "x": 1560, "y": 220 } },
    scr_yva5u0: { name: "Property Details", route: "/property/1", position: { "x": 2960, "y": 220 } }
  },
  sections: {
    sec_ksnf3y: { name: "Property Discovery", x: 0, y: 0, width: 4320, height: 1180 }
  },
  layers: [
  { kind: "section", id: "sec_ksnf3y", children: [
    { kind: "screen", id: "scr_zhsnvp" },
    { kind: "screen", id: "scr_6rbqng" },
    { kind: "screen", id: "scr_yva5u0" }]
  }]

};