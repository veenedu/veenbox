import {assert} from 'chai'
import {calculateStyle} from './utils1'

describe('Sanity Check',function(){
  it('1=1', function(){
    assert.equal(3,3);
  })
});


describe('Calculate Style',function(){
    // height,width,flex,dir='col'

    it('for Row',function(){
        assert.deepEqual(calculateStyle(undefined,100,1,'row'),{
            display:'flex',
            width:100
        },'1');

        assert.deepEqual(calculateStyle(undefined,undefined,1,'row'),{
            display:'flex',
            flex:1
        },'2');  

        assert.deepEqual(calculateStyle(undefined,undefined,2,'row'),{
            display:'flex',
            flex:2
        },'3');  

        assert.deepEqual(calculateStyle(undefined,100,2,'row'),{
            display:'flex',
            width:100
        },'4'); 

        assert.deepEqual(calculateStyle(undefined,undefined,undefined,'row'),{
            display:'flex',
            flex:1
        },'5');

        assert.deepEqual(calculateStyle(100,100,1,'row'),{
            display:'flex',
            height:100,
            width:100
        },'6');

        assert.deepEqual(calculateStyle('baseline',100,1,'row'),{
            display:'flex',
            width:100,
            'alignSelf':'baseline'
        },'7');

        assert.deepEqual(calculateStyle('full',100,1,'row'),{
            display:'flex',
            width:100
        },'8');

        assert.deepEqual(calculateStyle(100,'full',1,'row'),{
            display:'flex',
            height:100,
            flex:1
        },'9');  

        assert.deepEqual(calculateStyle('full','full',1,'row'),{
            display:'flex',
            flex:1
        },10);

        assert.deepEqual(calculateStyle('full','baseline',1,'row'),{
            display:'flex',
        },11);          

        assert.deepEqual(calculateStyle('baseline','baseline',undefined,'row'),{
            display:'flex',
            alignSelf:'baseline'
        });

    });


    it('for col',function(){
        assert.deepEqual(calculateStyle(undefined,100,1,'col'),{
            display:'flex',
            width:100,
            flex:1
        });

        assert.deepEqual(calculateStyle(undefined,undefined,undefined,'col'),{
            display:'flex',
            flex:1
        });

        assert.deepEqual(calculateStyle(100,100,1,'col'),{
            display:'flex',
            height:100,
            width:100
        });

        assert.deepEqual(calculateStyle(100,'full',1,'col'),{
            display:'flex',
            height:100
        });

        assert.deepEqual(calculateStyle('baseline','baseline',undefined,'col'),{
            display:'flex',
            alignSelf:'baseline'
        });

    });


});
