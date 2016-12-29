#include <stdio.h>

	int main()
	{
	    int intarray[5] = {10,20,30,40,50};
	    //-----------------------^
	    int *pointer = &intarray[2];

	    while (pointer < &intarray[5])
	    {
	        printf("%x\n", pointer);
	        pointer++;
	    }
	    return 0;
	}
