const EPISODES_DATA = [
  {
    "number": 1,
    "title": "Tập 1",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-001.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-001-fix.mp4"
  },
  {
    "number": 2,
    "title": "Tập 2",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-002.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-002-fix.mp4"
  },
  {
    "number": 3,
    "title": "Tập 3",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-003.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-003-fix.mp4"
  },
  {
    "number": 4,
    "title": "Tập 4",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-004.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-004-fix.mp4"
  },
  {
    "number": 5,
    "title": "Tập 5",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-005.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-005-fix.mp4"
  },
  {
    "number": 6,
    "title": "Tập 6",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-006.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-006-fix.mp4"
  },
  {
    "number": 7,
    "title": "Tập 7",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-007.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-007-fix.mp4"
  },
  {
    "number": 8,
    "title": "Tập 8",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-008.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-008-fix.mp4"
  },
  {
    "number": 9,
    "title": "Tập 9",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-009.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-009-fix.mp4"
  },
  {
    "number": 10,
    "title": "Tập 10",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-010.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-010-fix.mp4"
  },
  {
    "number": 11,
    "title": "Tập 11",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-011.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-011-fix.mp4"
  },
  {
    "number": 12,
    "title": "Tập 12",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-012.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-012-fix.mp4"
  },
  {
    "number": 13,
    "title": "Tập 13",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-013.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-013-fix.mp4"
  },
  {
    "number": 14,
    "title": "Tập 14",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-014.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-014-fix.mp4"
  },
  {
    "number": 15,
    "title": "Tập 15",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-015.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-015-fix.mp4"
  },
  {
    "number": 16,
    "title": "Tập 16",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-016.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-016-fix.mp4"
  },
  {
    "number": 17,
    "title": "Tập 17",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-017.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-017-fix.mp4"
  },
  {
    "number": 18,
    "title": "Tập 18",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-018.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-018-fix.mp4"
  },
  {
    "number": 19,
    "title": "Tập 19",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-019.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-019-fix.mp4"
  },
  {
    "number": 20,
    "title": "Tập 20",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-020.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-020-fix.mp4"
  },
  {
    "number": 21,
    "title": "Tập 21",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-021.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-021-fix.mp4"
  },
  {
    "number": 22,
    "title": "Tập 22",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-022.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-022-fix.mp4"
  },
  {
    "number": 23,
    "title": "Tập 23",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-023.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-023-fix.mp4"
  },
  {
    "number": 24,
    "title": "Tập 24",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-024.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-024-fix.mp4"
  },
  {
    "number": 25,
    "title": "Tập 25",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-025.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-025-fix.mp4"
  },
  {
    "number": 26,
    "title": "Tập 26",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-026.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-026-fix.mp4"
  },
  {
    "number": 27,
    "title": "Tập 27",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-027.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-027-fix.mp4"
  },
  {
    "number": 28,
    "title": "Tập 28",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-028.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-028-fix.mp4"
  },
  {
    "number": 29,
    "title": "Tập 29",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-029.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-029-fix.mp4"
  },
  {
    "number": 30,
    "title": "Tập 30",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-030.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-030-fix.mp4"
  },
  {
    "number": 31,
    "title": "Tập 31",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-031.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-031-fix.mp4"
  },
  {
    "number": 32,
    "title": "Tập 32",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-032.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-032-fix.mp4"
  },
  {
    "number": 33,
    "title": "Tập 33",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-033.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-033-fix.mp4"
  },
  {
    "number": 34,
    "title": "Tập 34",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-034.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-034-fix.mp4"
  },
  {
    "number": 35,
    "title": "Tập 35",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-035.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-035-fix.mp4"
  },
  {
    "number": 36,
    "title": "Tập 36",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-036.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-036-fix.mp4"
  },
  {
    "number": 37,
    "title": "Tập 37",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-037.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-037-fix.mp4"
  },
  {
    "number": 38,
    "title": "Tập 38",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-038.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-038-fix.mp4"
  },
  {
    "number": 39,
    "title": "Tập 39",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-039.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-039-fix.mp4"
  },
  {
    "number": 40,
    "title": "Tập 40",
    "url": "https://s3.phim1280.tv/20240719/G3IYtkcO/index.m3u8",
    "url_fix": "https://s3.phim1280.tv/20240719/G3IYtkcO/index.m3u8"
  },
  {
    "number": 41,
    "title": "Tập 41",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-041.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-041-fix.mp4"
  },
  {
    "number": 42,
    "title": "Tập 42",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-042.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-042-fix.mp4"
  },
  {
    "number": 43,
    "title": "Tập 43",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-043.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-043-fix.mp4"
  },
  {
    "number": 44,
    "title": "Tập 44",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-044.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-044-fix.mp4"
  },
  {
    "number": 45,
    "title": "Tập 45",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-045.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-045-fix.mp4"
  },
  {
    "number": 46,
    "title": "Tập 46",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-046.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-046-fix.mp4"
  },
  {
    "number": 47,
    "title": "Tập 47",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-047.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-047-fix.mp4"
  },
  {
    "number": 48,
    "title": "Tập 48",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-048.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-048-fix.mp4"
  },
  {
    "number": 49,
    "title": "Tập 49",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-049.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-049-fix.mp4"
  },
  {
    "number": 50,
    "title": "Tập 50",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-050.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-050-fix.mp4"
  },
  {
    "number": 51,
    "title": "Tập 51",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-051.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-051-fix.mp4"
  },
  {
    "number": 52,
    "title": "Tập 52",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-052.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-052-fix.mp4"
  },
  {
    "number": 53,
    "title": "Tập 53",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-053.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-053-fix.mp4"
  },
  {
    "number": 54,
    "title": "Tập 54",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-054.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-054-fix.mp4"
  },
  {
    "number": 55,
    "title": "Tập 55",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-055.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-055-fix.mp4"
  },
  {
    "number": 56,
    "title": "Tập 56",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-056.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-056-fix.mp4"
  },
  {
    "number": 57,
    "title": "Tập 57",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-057.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-057-fix.mp4"
  },
  {
    "number": 58,
    "title": "Tập 58",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-058.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-058-fix.mp4"
  },
  {
    "number": 59,
    "title": "Tập 59",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-059.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-059-fix.mp4"
  },
  {
    "number": 60,
    "title": "Tập 60",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-060.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-060-fix.mp4"
  },
  {
    "number": 61,
    "title": "Tập 61",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-061.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-061-fix.mp4"
  },
  {
    "number": 62,
    "title": "Tập 62",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-062.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-062-fix.mp4"
  },
  {
    "number": 63,
    "title": "Tập 63",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-063.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-063-fix.mp4"
  },
  {
    "number": 64,
    "title": "Tập 64",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-064.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-064-fix.mp4"
  },
  {
    "number": 65,
    "title": "Tập 65",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-065.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-065-fix.mp4"
  },
  {
    "number": 66,
    "title": "Tập 66",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-066.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-066-fix.mp4"
  },
  {
    "number": 67,
    "title": "Tập 67",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-067.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-067-fix.mp4"
  },
  {
    "number": 68,
    "title": "Tập 68",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-068.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-068-fix.mp4"
  },
  {
    "number": 69,
    "title": "Tập 69",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-069.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-069-fix.mp4"
  },
  {
    "number": 70,
    "title": "Tập 70",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-070.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-070-fix.mp4"
  },
  {
    "number": 71,
    "title": "Tập 71",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-071.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-071-fix.mp4"
  },
  {
    "number": 72,
    "title": "Tập 72",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-072.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-072-fix.mp4"
  },
  {
    "number": 73,
    "title": "Tập 73",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-073.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-073-fix.mp4"
  },
  {
    "number": 74,
    "title": "Tập 74",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-074.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-074-fix.mp4"
  },
  {
    "number": 75,
    "title": "Tập 75",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-075.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-075-fix.mp4"
  },
  {
    "number": 76,
    "title": "Tập 76",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-076.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-076-fix.mp4"
  },
  {
    "number": 77,
    "title": "Tập 77",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-077.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-077-fix.mp4"
  },
  {
    "number": 78,
    "title": "Tập 78",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-078.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-078-fix.mp4"
  },
  {
    "number": 79,
    "title": "Tập 79",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-079.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-079-fix.mp4"
  },
  {
    "number": 80,
    "title": "Tập 80",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-080.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-080-fix.mp4"
  },
  {
    "number": 81,
    "title": "Tập 81",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-081.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-081-fix.mp4"
  },
  {
    "number": 82,
    "title": "Tập 82",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-082.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-082-fix.mp4"
  },
  {
    "number": 83,
    "title": "Tập 83",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-083.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-083-fix.mp4"
  },
  {
    "number": 84,
    "title": "Tập 84",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-084.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-084-fix.mp4"
  },
  {
    "number": 85,
    "title": "Tập 85",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-085.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-085-fix.mp4"
  },
  {
    "number": 86,
    "title": "Tập 86",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-086.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-086-fix.mp4"
  },
  {
    "number": 87,
    "title": "Tập 87",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-087.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-087-fix.mp4"
  },
  {
    "number": 88,
    "title": "Tập 88",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-088.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-088-fix.mp4"
  },
  {
    "number": 89,
    "title": "Tập 89",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-089.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-089-fix.mp4"
  },
  {
    "number": 90,
    "title": "Tập 90",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-090.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-090-fix.mp4"
  },
  {
    "number": 91,
    "title": "Tập 91",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-091.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-091-fix.mp4"
  },
  {
    "number": 92,
    "title": "Tập 92",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-092.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-092-fix.mp4"
  },
  {
    "number": 93,
    "title": "Tập 93",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-093.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-093-fix.mp4"
  },
  {
    "number": 94,
    "title": "Tập 94",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-094.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-094-fix.mp4"
  },
  {
    "number": 95,
    "title": "Tập 95",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-095.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-095-fix.mp4"
  },
  {
    "number": 96,
    "title": "Tập 96",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-096.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-096-fix.mp4"
  },
  {
    "number": 97,
    "title": "Tập 97",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-097.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-097-fix.mp4"
  },
  {
    "number": 98,
    "title": "Tập 98",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-098.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-098-fix.mp4"
  },
  {
    "number": 99,
    "title": "Tập 99",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-099.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-099-fix.mp4"
  },
  {
    "number": 100,
    "title": "Tập 100",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-100.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-100-fix.mp4"
  },
  {
    "number": 101,
    "title": "Tập 101",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-101.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-101-fix.mp4"
  },
  {
    "number": 102,
    "title": "Tập 102",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-102.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-102-fix.mp4"
  },
  {
    "number": 103,
    "title": "Tập 103",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-103.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-103-fix.mp4"
  },
  {
    "number": 104,
    "title": "Tập 104",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-104.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-104-fix.mp4"
  },
  {
    "number": 105,
    "title": "Tập 105",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-105.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-105-fix.mp4"
  },
  {
    "number": 106,
    "title": "Tập 106",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-106.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-106-fix.mp4"
  },
  {
    "number": 107,
    "title": "Tập 107",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-107.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-107-fix.mp4"
  },
  {
    "number": 108,
    "title": "Tập 108",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-108.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-108-fix.mp4"
  },
  {
    "number": 109,
    "title": "Tập 109",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-109.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-109-fix.mp4"
  },
  {
    "number": 110,
    "title": "Tập 110",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-110.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-110-fix.mp4"
  },
  {
    "number": 111,
    "title": "Tập 111",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-111.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-111-fix.mp4"
  },
  {
    "number": 112,
    "title": "Tập 112",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-112.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-112-fix.mp4"
  },
  {
    "number": 113,
    "title": "Tập 113",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-113.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-113-fix.mp4"
  },
  {
    "number": 114,
    "title": "Tập 114",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-114.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-114-fix.mp4"
  },
  {
    "number": 115,
    "title": "Tập 115",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-115.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-115-fix.mp4"
  },
  {
    "number": 116,
    "title": "Tập 116",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-116.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-116-fix.mp4"
  },
  {
    "number": 117,
    "title": "Tập 117",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-117.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-117-fix.mp4"
  },
  {
    "number": 118,
    "title": "Tập 118",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-118.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-118-fix.mp4"
  },
  {
    "number": 119,
    "title": "Tập 119",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-119.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-119-fix.mp4"
  },
  {
    "number": 120,
    "title": "Tập 120",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-120.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-120-fix.mp4"
  },
  {
    "number": 121,
    "title": "Tập 121",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-121.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-121-fix.mp4"
  },
  {
    "number": 122,
    "title": "Tập 122",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-122.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-122-fix.mp4"
  },
  {
    "number": 123,
    "title": "Tập 123",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-123.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-123-fix.mp4"
  },
  {
    "number": 124,
    "title": "Tập 124",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-124.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-124-fix.mp4"
  },
  {
    "number": 125,
    "title": "Tập 125",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-125.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-125-fix.mp4"
  },
  {
    "number": 126,
    "title": "Tập 126",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-126.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-126-fix.mp4"
  },
  {
    "number": 127,
    "title": "Tập 127",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-127.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-127-fix.mp4"
  },
  {
    "number": 128,
    "title": "Tập 128",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-128.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-128-fix.mp4"
  },
  {
    "number": 129,
    "title": "Tập 129",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-129.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-129-fix.mp4"
  },
  {
    "number": 130,
    "title": "Tập 130",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-130.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-130-fix.mp4"
  },
  {
    "number": 131,
    "title": "Tập 131",
    "url": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-131.mp4",
    "url_fix": "https://newwiki.s3-hcm-r2.s3cloud.vn/anime/dbsvietsub/DBS-vietsub-131-fix.mp4"
  }
];
