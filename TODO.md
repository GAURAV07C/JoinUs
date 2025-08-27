# Fix Open Files - TODO List

## Phase 1: Fix TypeScript Types ✅ COMPLETED
- [x] Update Event interface in types/index.ts to match Prisma schema
- [x] Ensure all types are consistent with database structure

## Phase 2: Fix Events Service
- [ ] Update events-service.ts to work with actual database schema
- [ ] Remove hardcoded values and incorrect mappings
- [ ] Ensure proper field mapping between database and frontend

## Phase 3: Clean up Mock Data ✅ COMPLETED
- [x] Update events.ts mock data to be consistent with database schema
- [x] Fix date format inconsistencies
- [x] Verify image paths

## Phase 4: Handle Conflicting Services
- [ ] Decide on approach for queries.ts (remove or refactor)
- [ ] Ensure no duplicate functionality

## Phase 5: Testing
- [ ] Verify changes work with database
- [ ] Test event creation and retrieval
- [ ] Ensure no breaking changes
