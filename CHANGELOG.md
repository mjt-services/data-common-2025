# Changelog


## 2025-07-11
- bump deps ([df1dd05](https://github.com/mjt-services/data-common-2025/commit/df1dd0546617732ca57c94fbef9e3ea3595970ba)) by user
- bump deps ([106e3fc](https://github.com/mjt-services/data-common-2025/commit/106e3fcebb2dc1097016f0451aeec0cc937eea1b)) by user
- bump deps ([f1c3471](https://github.com/mjt-services/data-common-2025/commit/f1c3471eea0384f544849b5765b87cf9fea15cfd)) by user
- request->publish on datas.put ([7485926](https://github.com/mjt-services/data-common-2025/commit/748592644a8f14f16bd4266a35a968f0a0a4850a)) by user
- bump deps ([6685af3](https://github.com/mjt-services/data-common-2025/commit/6685af3d75e1bb1645ee30c7b6d3581c58531687)) by user

## 2025-03-28
- added putEntity and re-org ([5427609](https://github.com/mjt-services/data-common-2025/commit/5427609944128c2711d0a3cdd241dd45914d3f5d)) by Matt Taylor

## 2025-03-26
- reworked vector search response ([e25e041](https://github.com/mjt-services/data-common-2025/commit/e25e04182357ff93fc20ce30a43b1df7bb5424a9)) by Matt Taylor
- query fp32array instead of number[] ([d9a25d7](https://github.com/mjt-services/data-common-2025/commit/d9a25d7b4e6d9a97aeeca0a4048f26808c7afc30)) by Matt Taylor
- number[] ->f32array ([57e5951](https://github.com/mjt-services/data-common-2025/commit/57e5951b251fd2c79f420afcf113d5344a4b378a)) by Matt Taylor
- added vector operations ([9220430](https://github.com/mjt-services/data-common-2025/commit/9220430b9de3cb0c88e41483be08d8b7a5aa6332)) by Matt Taylor

## 2025-03-03
- added Entity as possible payload type for events ([ac17d65](https://github.com/mjt-services/data-common-2025/commit/ac17d652e601126a5528071637d43d9fc7da2d06)) by Matt Taylor
- added Entity type ([8832ab3](https://github.com/mjt-services/data-common-2025/commit/8832ab382148f5c369db1774fcd9e41ad99339b3)) by Matt Taylor
- add child and object update events ([0993792](https://github.com/mjt-services/data-common-2025/commit/09937929cf5218c682a7c9d01afd9eac40a377f5)) by Matt Taylor

## 2025-02-23
- fix types on Datas ([bbfc54a](https://github.com/mjt-services/data-common-2025/commit/bbfc54a1e2b9a608a2b067f5583e1c02cb17e475)) by Matt Taylor
- stronger test of parentId on ChildObject typeguard ([3d32a1a](https://github.com/mjt-services/data-common-2025/commit/3d32a1adb2f1607a10a3f0aa879f0baea06912db)) by Matt Taylor
- add ChildObject type ([87f3eef](https://github.com/mjt-services/data-common-2025/commit/87f3eef239214ddf4f1aa2d71c5ffcc5d55379a2)) by Matt Taylor
- add DATA_EVENT_MAP and UpdteSubject ([ae252cf](https://github.com/mjt-services/data-common-2025/commit/ae252cf0a3e585a31880f26571b26b283edd0593)) by Matt Taylor

## 2025-02-21
- bump mjt-engine/message ([7aa8926](https://github.com/mjt-services/data-common-2025/commit/7aa8926b35f7d797466fc420652d86b40337a953)) by Matt Taylor

## 2025-02-20
- add generic Link type ([84241bd](https://github.com/mjt-services/data-common-2025/commit/84241bd664874af21bafa8de5fe8c6e62547d282)) by Matt Taylor

## 2025-02-17
- added getMany helper ([b6af16b](https://github.com/mjt-services/data-common-2025/commit/b6af16b0d70cb272d1781283c2ae9af777eba1a5)) by Matt Taylor
- added dep on mjt-engine/message, and introduced the Datas helper ([3886d5c](https://github.com/mjt-services/data-common-2025/commit/3886d5c9cd4203149eac7ef47b2556dfac5acd35)) by Matt Taylor

## 2025-02-15
- fix id parser ([0d7be43](https://github.com/mjt-services/data-common-2025/commit/0d7be435308e34f30941e69a37b2425eeb5d9693)) by Matt Taylor

## 2025-02-14
- objectstore optional for operations (determine via ID) ([7982838](https://github.com/mjt-services/data-common-2025/commit/79828385b33c9168c5165911156b951b40aaf1ce)) by Matt Taylor
- namespace is optional for object-store ([2627b17](https://github.com/mjt-services/data-common-2025/commit/2627b172742f1c141c7d61e05ab389668b9e0b49)) by Matt Taylor
- rework of ID to include namespace and functions from/to object-store ([b100cf3](https://github.com/mjt-services/data-common-2025/commit/b100cf3be8ca1fb7ab32027ad192cf1f19607c86)) by Matt Taylor
- key->keys on getMany ([3548db2](https://github.com/mjt-services/data-common-2025/commit/3548db23bcb17d1b9ed8ccfece83578fd2415888)) by Matt Taylor
- dbStore->objectStore and add getMany operation ([7c9dbe2](https://github.com/mjt-services/data-common-2025/commit/7c9dbe273f18993fa0bc48e19e34b8c3a62fbe79)) by Matt Taylor
- remove by from-object-store data-query ([46a1603](https://github.com/mjt-services/data-common-2025/commit/46a160382f14b1312c173648a435e8f6422fa2b5)) by Matt Taylor
- response unknown on data.search, some problems have definite and unknown solutions ([ee50910](https://github.com/mjt-services/data-common-2025/commit/ee50910a9570d34b38e89dc0e82272318291f9a1)) by Matt Taylor
- rework of DataQuery type to have multiple from props ([0c1ff8d](https://github.com/mjt-services/data-common-2025/commit/0c1ff8da66df1e783725b60b26d51d2b4e2568cc)) by Matt Taylor

## 2025-02-13
- rework of data operations, introduction of ObjectStore, and DataQuery ([c0952bc](https://github.com/mjt-services/data-common-2025/commit/c0952bc481b9651f51cad727a491b97cf439bc49)) by Matt Taylor

## 2025-02-07
- update Ids to be more flexible and accomidating of future decisions ([5e529e6](https://github.com/mjt-services/data-common-2025/commit/5e529e642e4ef645175652fba8283439cda4bb14)) by Matt Taylor
- added Ids util ([443cc6e](https://github.com/mjt-services/data-common-2025/commit/443cc6e9b5e16faec33f45a5271c2c424e23b44c)) by Matt Taylor

## 2025-02-02
- remove IDBKeyRange, and remove the data.add since redundant ([dd69f0d](https://github.com/mjt-services/data-common-2025/commit/dd69f0d8fd7fa0a9fafe6ef404c1015e961458b3)) by Matt Taylor
- Db -> DbStore rename ([5ebb2cb](https://github.com/mjt-services/data-common-2025/commit/5ebb2cb2777e1104f54e77897718177e9f860b2a)) by Matt Taylor
- update-readme ([4f6eaa6](https://github.com/mjt-services/data-common-2025/commit/4f6eaa603a2434990eb5df2bf788fc98c71cf85e)) by Matt Taylor
- initial-commit ([25ae1f5](https://github.com/mjt-services/data-common-2025/commit/25ae1f5a636ec57f999a0575638840798d2f545f)) by Matt Taylor
