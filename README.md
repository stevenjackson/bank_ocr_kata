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


## Time extension!
* With 30 minutes on the clock, I was hoping to get to the checksum story, but first I needed to actually parse a file.
* A file of two account numbers seemed like a solid test; this would force me to handle the blank line between account numbers.
* I want to pick at the implementation a bit, I don't love the readline solution, but I knew it would work for this.  This led to me into dealing with callbacks, and  "forced" me into promises as well, which I love (too much?).  Still, I think there's a concept of "4 lines at time reader" hiding in there that could be teased out.

### Finishing story 1 (afbfd51eb1515442e65003397ae78ce4a17742c2)
* Unfortunately I blew the rest of my timebox creating a 500 line test file.  In real life, I'd ask this customer to provide one, but given my inability to discuss a compromise with a webpage, I thought it would be a good thing to have, and not too hard.  Well, not that hard, but burned 10 minutes.  Fortunately(?) the "integration" test passed first time, which is strange and rather unexpected.  I also realized I don't know how to get inside chai-as-promised and spot check a few values, which I would normally do in an integration test like this.

## Retrospective
Fun problem!  I hadn't seen this one before and I like the inanity of it.  Surprising no one, I thought I would be well into the third story when time expired, but estimates are hard.  I still feel like perhaps I started at the wrong end, if I'd worked backwards from the "integration" test, maybe I would have ended up with a different solution?  I also found my node was just rusty enough to make me question silly stuff like what the folder conventions were for "not-test" and "test", const vs let, slipping in and out of arrow syntax, etc.  I like to be consistent, but team convention always trumps my personal preferences, and well, I've been on a lot of teams.  The timebox started to eat at me towards the end, I wanted to explore some abstractions, but I also really wanted to get out of the parsing problem as well and move on to the other stories.  Katas are always weird, because there's this clock and a notion of completeness, unlike a code retreat (no expectation of completeness), or production codebase(maintenance never ends, readability is usually worth the extra time).

