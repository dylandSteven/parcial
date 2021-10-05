import { TestBed } from '@angular/core/testing';
import { Knowledge} from "../services/knowledge-api"

describe('Knowledge', () => {
    beforeEach(() => TestBed.configureTestingModule({}))
    it('should be created', () => {
        const service: Knowledge = TestBed.get(Knowledge);
        expect(service).toBeTruthy();
    })
})