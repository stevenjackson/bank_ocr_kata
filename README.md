# Bank OCR Kata
http://codingdojo.org/cgi-bin/index.pl?KataBankOCR

## Challenge
Do this in two hours using javascript

### Initial thoughts
* After reading the problem, my first thought was that I'd really like to get some examples into cucumber/gherkin form so I can review each user story with my non-corporeal client.
* But given the time and language constraints, (2 hours, javascript), I decide to forgo this step and dive in.
* It seems like the hardest part of the first story is taking three lines and converting them into 9 3x3 grids.
* So my first test will have something to do with reading a single digit.

### After first commit
I wouldn't normally commit on a failing test, but I want to show the workflow.

### After second commit
* I get to green.  Couple things are jumping out at me.
  *  I hate the way my test is formatted.  But I don't want to go to input files or anything because I want to keep it clear how this works.
  * Parsing these numbers and making determinations would take time.

* Given there's only 10 possible characters, a "template" matching strategy seems relatively reasonable.
* Again, a naive implementation of this is going to be annoying, and I'm already questioning my choice of first test.

### After third commit
But, I'm hoping I'll take this pain one time and then move on to more interesting problems.

### After 3eedb6bf6502f86a5b1053c5be73a4b2ca57bd99
* Ok, just finished the digits.  That was painful on a few counts.  First, it was tedious.
* Second, I ended up copying my test values straight into my implementation, which generally is a good indicator that I'm  doing the wrong thing.
* I've burned an hour and can't parse a single line of inputs (unless they happen to have one digit), which seems like a pretty terrible place to be.
* On the plus side, I think I've gotten past the annoying part.  Next step is to do a line.

### After 0b845d44b110788c61b39832277896ab4f41ea21
* Ok, I got there in one big jump.  My tests were probably too big.  There's a digit object hiding in there that I've mostly teased out.  I think that might help some of thinking in terms other than 2D arrays.
* There's also this idea of a tokenizer that works on three lines at once.  I brute forced my way past that, but it seems like a nice refactoring.  Again 2D arrays are a little hard to think about.  This again makes me wonder if I should have chosen a different place to start.
* I'm about 90 minutes in and I need to take my boys swimming, so I'll stop here:

## Next Steps
* To finish user story 1, I need to create a file parser that will split the input into lines of four, strip out the empty line and feed each into my existing parseAccountNumber method.
* I was hoping to get into user story 2, which seems pretty trivial (just an exercise in careful reading).
* User story 3 would require a small change to my implementation, instead of raising on bad read, instead we need to return a ?.
* User story 4 sounds really interesting and is completely incompatible with my very simple parser.



