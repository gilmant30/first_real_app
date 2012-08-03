class UsersController < ApplicationController
  def index
  	@user = User.all	
  end

  def show
  	@user = User.find(params[:id])
    f = rand(100)
    @user.guess = f

  	respond_to do |format|
      format.html 
      format.js
    end
  end

  def new
  	@user = User.new

    respond_to do |format|
      format.js { render :layout=>false }
    end
  end

  def create
  	  @user = User.new(params[:user])  
  	  @user.game_number = 1
  
    respond_to do |format|  
      if @user.save  
        format.html { redirect_to(@user, :notice => 'User created.') }  
        format.js  
      else  
        format.html { render :action => "new" }  
        format.js  
      end  
    end  
  end

  def game2
    respond_to do | format |  
        format.js { render :layout => false }  
    end
  end

  def game3
    respond_to do | format |  
        format.js { render :layout => false}  
    end
  end

end
