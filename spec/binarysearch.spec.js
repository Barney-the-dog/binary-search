const binarySearch = require('../index')

test('Функция должна возвращать индекс элемента', () => {
    describe("binarySearch()", function() {
        it("returns first index of item in array", function() {
          let item = 3;
          let arr = [1,2,3,4,5];
          expect(binarySearch(item, arr)).toEqual(2);
        });
        });
    
})

test('Should be defined', () => {
    expect(binarySearch(item, arr)).toBeDefined();
      });
      

test('Функция должна возвращать -1, если элемента не существует в данном массиве', () => {
    it("returns -1 if not in array", function() {
        let item = 6;
        let arr = [1,2,3,4,5];
        expect(binarySearch(item, arr)).toEqual(-1);
      });   
})