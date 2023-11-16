package cibertec;

import java.awt.BorderLayout;
import java.awt.FlowLayout;

import javax.swing.JButton;
import javax.swing.JDialog;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JLabel;
import javax.swing.JComboBox;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.DefaultComboBoxModel;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import java.awt.Font;

public class GenReport extends JDialog {
	private JTextArea txtS;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		try {
			GenReport dialog = new GenReport();
			dialog.setDefaultCloseOperation(JDialog.DISPOSE_ON_CLOSE);
			dialog.setVisible(true);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * Create the dialog.
	 */
	public GenReport() {
		setBounds(100, 100, 743, 586);
		getContentPane().setLayout(null);
		
		JLabel lblReporte = new JLabel("Tipo de Reporte");
		lblReporte.setBounds(10, 11, 101, 14);
		getContentPane().add(lblReporte);
		
		JComboBox cboReporte = new JComboBox();
		cboReporte.addActionListener(new ActionListener() {
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////			
		void Imprimir(String ss){
		txtS.append(ss+"\n");
		}
			
		void salidaVentasPorModelo() {
			txtS.setText("");
			Imprimir("VENTAS POR MODELO");
			Imprimir("");
			Imprimir("Modelo\t\t\t\t:"+Ceramicas.modelo0);
			Imprimir("Cantidad de ventas\t\t:"+Ceramicas.cantVendidas0);
			Imprimir("Cantidad de cajas vendidas\t:"+Ceramicas.cantCajas0);
			Imprimir("Importe total vendido\t\t:"+String.format("%,8.2f",Ceramicas.impAcumulado0));
			Imprimir("Aporte a la cuota diaria\t:"+String.format("%,8.2f",(Ceramicas.impAcumulado0/Ceramicas.cuotaDiaria)*100)+"%");
			Imprimir("");
			Imprimir("Modelo\t\t\t\t:"+Ceramicas.modelo1);
			Imprimir("Cantidad de ventas\t\t:"+Ceramicas.cantVendidas1);
			Imprimir("Cantidad de cajas vendidas\t:"+Ceramicas.cantCajas1);
			Imprimir("Importe total vendido\t\t:"+String.format("%,8.2f",Ceramicas.impAcumulado1));
			Imprimir("Aporte a la cuota diaria\t:"+String.format("%,8.2f",(Ceramicas.impAcumulado1/Ceramicas.cuotaDiaria)*100)+"%");
			Imprimir("");
			Imprimir("Modelo\t\t\t\t:"+Ceramicas.modelo2);
			Imprimir("Cantidad de ventas\t\t:"+Ceramicas.cantVendidas2);
			Imprimir("Cantidad de cajas vendidas\t:"+Ceramicas.cantCajas2);
			Imprimir("Importe total vendido\t\t:"+String.format("%,8.2f",Ceramicas.impAcumulado2));
			Imprimir("Aporte a la cuota diaria\t:"+String.format("%,8.2f",(Ceramicas.impAcumulado2/Ceramicas.cuotaDiaria)*100)+"%");
			Imprimir("");
			Imprimir("Modelo\t\t\t\t:"+Ceramicas.modelo3);
			Imprimir("Cantidad de ventas\t\t:"+Ceramicas.cantVendidas3);
			Imprimir("Cantidad de cajas vendidas\t:"+Ceramicas.cantCajas3);
			Imprimir("Importe total vendido\t\t:"+String.format("%,8.2f",Ceramicas.impAcumulado3));
			Imprimir("Aporte a la cuota diaria\t:"+String.format("%,8.2f",(Ceramicas.impAcumulado3/Ceramicas.cuotaDiaria)*100)+"%");
			Imprimir("");
			Imprimir("Modelo\t\t\t\t:"+Ceramicas.modelo4);
			Imprimir("Cantidad de ventas\t\t:"+Ceramicas.cantVendidas4);
			Imprimir("Cantidad de cajas vendidas\t:"+Ceramicas.cantCajas4);
			Imprimir("Importe total vendido\t\t:"+String.format("%,8.2f",Ceramicas.impAcumulado4));
			Imprimir("Aporte a la cuota diaria\t:"+String.format("%,8.2f",(Ceramicas.impAcumulado4/Ceramicas.cuotaDiaria)*100)+"%");
			}
		
		void salidaComparacionPrecios() {
			txtS.setText("");
			Imprimir("COMPARACIÓN DE PRECIOS CON EL PRECIO PROMEDIO");
			Imprimir("");
			Imprimir("Modelo\t\t:"+Ceramicas.modelo0);
			Imprimir("Precio\t\t:"+String.format("%,8.2f",Ceramicas.ip0));
			Imprimir("Precio promedio\t:"+String.format("%,8.2f",Ceramicas.ic0));
			Imprimir("Comparación\t:"+String.format("%,8.2f",(Ceramicas.ic0-Ceramicas.ip0)));
			Imprimir("");
			Imprimir("Modelo\t\t:"+Ceramicas.modelo1);
			Imprimir("Precio\t\t:"+String.format("%,8.2f",Ceramicas.ip1));
			Imprimir("Precio promedio\t:"+String.format("%,8.2f",Ceramicas.ic1));
			Imprimir("Comparación\t:"+String.format("%,8.2f",(Ceramicas.ic1-Ceramicas.ip1)));
			Imprimir("");
			Imprimir("Modelo\t\t:"+Ceramicas.modelo2);
			Imprimir("Precio\t\t:"+String.format("%,8.2f",Ceramicas.ip2));
			Imprimir("Precio promedio\t:"+String.format("%,8.2f",Ceramicas.ic2));
			Imprimir("Comparación\t:"+String.format("%,8.2f",(Ceramicas.ic2-Ceramicas.ip2)));
			Imprimir("");
			Imprimir("Modelo\t\t:"+Ceramicas.modelo3);
			Imprimir("Precio\t\t:"+String.format("%,8.2f",Ceramicas.ip3));
			Imprimir("Precio promedio\t:"+String.format("%,8.2f",Ceramicas.ic3));
			Imprimir("Comparación\t:"+String.format("%,8.2f",(Ceramicas.ic3-Ceramicas.ip3)));
			Imprimir("");
			Imprimir("Modelo\t\t:"+Ceramicas.modelo4);
			Imprimir("Precio\t\t:"+String.format("%,8.2f",Ceramicas.ip4));
			Imprimir("Precio promedio\t:"+String.format("%,8.2f",Ceramicas.ic4));
			Imprimir("Comparación\t:"+String.format("%,8.2f",(Ceramicas.ic4-Ceramicas.ip4)));
			
			
		}
		
		void SalidaComparacionDeCajasVendaidas() {
			txtS.setText("");
			Imprimir("");
			Imprimir("Modelo\t\t\t\t:"+Ceramicas.modelo0);
			Imprimir("Cantidad de cajas vendidas\t: "+Ceramicas.cantCajas0);
			Imprimir("Cantidad óptima\t\t\t:"+Ceramicas.cantidadOptima);
			Imprimir("Comparación\t\t\t:"+ Ceramicas.Cprcn1);
			Imprimir("");
			Imprimir("Modelo\t\t\t\t:"+Ceramicas.modelo1);
			Imprimir("Cantidad de cajas vendidas\t:"+Ceramicas.cantCajas1);
			Imprimir("Cantidad óptima\t\t\t: "+Ceramicas.cantidadOptima);
			Imprimir("Comparación\t\t\t:"+ Ceramicas.Cprcn2);
			Imprimir("");
			Imprimir("Modelo\t\t\t\t:"+Ceramicas.modelo2);
			Imprimir("Cantidad de cajas vendidas\t:"+Ceramicas.cantCajas2);
			Imprimir("Cantidad óptima \t\t:"+Ceramicas.cantidadOptima);
			Imprimir("Comparación\t\t\t:"+ Ceramicas.Cprcn3);
			Imprimir("");
			Imprimir("Modelo\t\t\t\t:"+Ceramicas.modelo3);
			Imprimir("Cantidad de cajas vendidas\t:"+Ceramicas.cantCajas3);
			Imprimir("Cantidad óptima \t\t:"+Ceramicas.cantidadOptima);
			Imprimir("Comparación\t\t\t:"+ Ceramicas.Cprcn4);
			Imprimir("");
			Imprimir("Modelo\t\t\t\t:"+Ceramicas.modelo4);
			Imprimir("Cantidad de cajas vendidas\t:"+Ceramicas.cantCajas4);
			Imprimir("Cantidad óptima\t\t\t:"+Ceramicas.cantidadOptima);
			Imprimir("Comparación\t\t\t:"+ Ceramicas.Cprcn5);
			
			
			
		}
		
		void salidaEstadísticasobreelprecio(double pMayor,double pMedio,double pMenor) {
			txtS.setText("ESTADÍSTICA SOBRE EL PRECIO");
			Imprimir("");Imprimir("");
			Imprimir("Precio promedio :S/."+String.format("%,8.2f",pMedio));
			Imprimir("Precio menor \t:S/."+String.format("%,8.2f",pMenor));
			Imprimir("Precio mayor \t:S/."+String.format("%,8.2f",pMayor));
			
		}
	
		
		
		
		///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////				
			public void actionPerformed(ActionEvent e) {
				

	//Calcular los precio			
				double precioMayor;
					if(Ceramicas.precio0<Ceramicas.precio1 && Ceramicas.precio0<Ceramicas.precio2&& Ceramicas.precio0<Ceramicas.precio3&& Ceramicas.precio0<Ceramicas.precio4) {
						precioMayor=Ceramicas.precio0;	
					}
					else if(Ceramicas.precio1<Ceramicas.precio2 && Ceramicas.precio1<Ceramicas.precio3&& Ceramicas.precio1<Ceramicas.precio4&& Ceramicas.precio1<Ceramicas.precio0) {
						precioMayor=Ceramicas.precio1;	
					}
					else if(Ceramicas.precio2<Ceramicas.precio3 && Ceramicas.precio2<Ceramicas.precio4&& Ceramicas.precio2<Ceramicas.precio0&& Ceramicas.precio2<Ceramicas.precio1) {
						precioMayor=Ceramicas.precio2;	
					}
					else if(Ceramicas.precio3<Ceramicas.precio4 && Ceramicas.precio3<Ceramicas.precio0&& Ceramicas.precio3<Ceramicas.precio1&& Ceramicas.precio3<Ceramicas.precio2) {
						precioMayor=Ceramicas.precio3;	
					}
					else 
						precioMayor=Ceramicas.precio4;
					
				
				double precioMenor;
					if(Ceramicas.precio0>Ceramicas.precio1 && Ceramicas.precio0>Ceramicas.precio2&& Ceramicas.precio0>Ceramicas.precio3&& Ceramicas.precio0>Ceramicas.precio4) {
						precioMenor=Ceramicas.precio0;	
					}
					else if(Ceramicas.precio1>Ceramicas.precio2 && Ceramicas.precio1>Ceramicas.precio3&& Ceramicas.precio1>Ceramicas.precio4&& Ceramicas.precio1>Ceramicas.precio0) {
						precioMenor=Ceramicas.precio1;	
					}
					else if(Ceramicas.precio2>Ceramicas.precio3 && Ceramicas.precio2>Ceramicas.precio4&& Ceramicas.precio2>Ceramicas.precio0&& Ceramicas.precio2>Ceramicas.precio1) {
						precioMenor=Ceramicas.precio2;	
					}
					else if(Ceramicas.precio3>Ceramicas.precio4 && Ceramicas.precio3>Ceramicas.precio0&& Ceramicas.precio3>Ceramicas.precio1&& Ceramicas.precio3>Ceramicas.precio2) {
						precioMenor=Ceramicas.precio3;	
					}
					else 
						precioMenor=Ceramicas.precio3;	
					
			
				double PrecioMedio;
					PrecioMedio=(Ceramicas.precio0+Ceramicas.precio2+Ceramicas.precio1+Ceramicas.precio3+Ceramicas.precio4)/5;	
				
			
				
			int reporte=cboReporte.getSelectedIndex();
			switch(reporte) {
			case 0:
				salidaVentasPorModelo();
				break;
			case 1:
				salidaComparacionPrecios();
				break;
			case 2:
				SalidaComparacionDeCajasVendaidas();
				break;
			case 3:
				salidaEstadísticasobreelprecio(precioMayor, PrecioMedio, precioMenor);
				break;
			}
		
			
			
			
			
			
			
			}
		});
		cboReporte.setModel(new DefaultComboBoxModel(new String[] {"Ventas por modelo", "Comparaci\u00F3n de precios con el precio promedio", "Comparaci\u00F3n de cajas vendidas con la cantidad \u00F3ptima", "Estad\u00EDstica sobre el precio"}));
		cboReporte.setBounds(98, 7, 417, 22);
		getContentPane().add(cboReporte);
		
		JButton btnCerrar = new JButton("Cerrar");
		btnCerrar.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				btnCerrarActionPerformed(e);
			}
		});
		btnCerrar.setBounds(628, 11, 89, 23);
		getContentPane().add(btnCerrar);
		
		JScrollPane scrollPane = new JScrollPane();
		scrollPane.setBounds(10, 50, 707, 486);
		getContentPane().add(scrollPane);
		
		txtS = new JTextArea();
		txtS.setFont(new Font("Monospaced", Font.PLAIN, 13));
		scrollPane.setViewportView(txtS);
	}
	protected void btnCerrarActionPerformed(ActionEvent e) {
		setVisible(false);}
}
