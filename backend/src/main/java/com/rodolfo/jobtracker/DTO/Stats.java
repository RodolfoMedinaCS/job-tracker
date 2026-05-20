package com.rodolfo.jobtracker.DTO;

public class Stats {

    private int totalSubmitted;
    private int totalRejected;
    private int totalHired;
    private int totalUnderReview;
    private int totalOfferExtended;


    public Stats(){}
    public Stats(int totalSubmitted, int totalRejected, int totalHired, int totalUnderReview, int totalOfferExtended) {
        this.totalSubmitted = totalSubmitted;
        this.totalRejected = totalRejected;
        this.totalHired = totalHired;
        this.totalUnderReview = totalUnderReview;
        this.totalOfferExtended = totalOfferExtended;
    }

    //getters
    public int getTotalSubmitted(){return totalSubmitted;}
    public int getTotalRejected(){return totalRejected;}
    public int getTotalHired(){return totalHired;}
    public int getTotalUnderReview(){return totalUnderReview;}
    public int getTotalOfferExtended(){return totalOfferExtended;}

    //setters
    public void setTotalSubmitted(int totalSubmitted){this.totalSubmitted = totalSubmitted;}
    public void setTotalRejected(int totalRejected){this.totalRejected = totalRejected;}
    public void setTotalHired(int totalHired){this.totalHired = totalHired;}
    public void setTotalUnderReview(int totalUnderReview){this.totalUnderReview = totalUnderReview;}
    public void setTotalOfferExtended(int totalOfferExtended){this.totalOfferExtended = totalOfferExtended;}
}
