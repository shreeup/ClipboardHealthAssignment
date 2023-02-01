# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Solution : 

1) Modify Agent table in the database to include this customid column.
    Prepare existing data - write some automated scripts to generate and store unique customid for existing agent records. 

2) Develop interface to configure custom ids for each agent. It should allow to create custom id. Or if there is already interface to accept agent details then enhance it to allow giving cutomid. 

It is assumed that customid should qulify certain criteria - Minimum 8 characters with at least 1 uppers,1 lower, 1 number, 1 alphabet, 1 special character. It is assumed to be unique within system.
    Interface should take care of validation 

3) Connect this interface with API to update Agent details

4) Modify the reporting logic to fetch customid instead of id
