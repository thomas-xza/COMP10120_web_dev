import { validate_phone } from './validators.js';

test('valid phone 1', () => { 
    expect(
	validate_phone(
	    "07777777777"
	)
    )
	.toBe(
	    1
	);
});

test('valid phone 2', () => { 
    expect(
	validate_phone(
	    "0208 111 2222"
	)
    )
	.toBe(
	    1
	);
});

test('extreme phone 1', () => { 
    expect(
	validate_phone(
	    "     447 123 5 5 4 2   93"
	)
    )
	.toBe(
	    1
	);
});

test('extreme phone 2', () => { 
    expect(
	validate_phone(
	    "447 777 777 777 1"
	)
    )
	.toBe(
	    0
	);
});

test('invalid phone 1', () => { 
    expect(
	validate_phone(
	    ""
	)
    )
	.toBe(
	    0
	);
});

test('invalid phone 2', () => { 
    expect(
	validate_phone(
	    "0"
	)
    )
	.toBe(
	    0
	);
});

test('invalid phone 3', () => { 
    expect(
	validate_phone(
	    "07 123 456 9"
	)
    )
	.toBe(
	    0
	);
});

